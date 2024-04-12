package com.ha.helixauth.api.annotation

import com.google.gson.Gson
import javax.annotation.processing.AbstractProcessor
import javax.annotation.processing.RoundEnvironment
import javax.annotation.processing.SupportedAnnotationTypes
import javax.annotation.processing.SupportedSourceVersion
import javax.lang.model.SourceVersion
import javax.lang.model.element.TypeElement
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import java.io.File
import java.nio.file.Files
import java.nio.file.Path
import java.nio.file.Paths
import java.nio.file.StandardOpenOption
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

@SupportedAnnotationTypes("com.ha.helixauth.api.annotation.HelixAuthorize", "org.springframework.web.bind.annotation.*")
@SupportedSourceVersion(SourceVersion.RELEASE_8)
class EndpointProcessor : AbstractProcessor() {
    private val gson = Gson()

    override fun process(annotations: Set<TypeElement>, roundEnv: RoundEnvironment): Boolean {
        val endpointList = mutableListOf<Map<String, String?>>()

        roundEnv.getElementsAnnotatedWith(HelixAuthorize::class.java).forEach { element ->
            val auth = element.getAnnotation(HelixAuthorize::class.java)
            val roles = auth.roles.joinToString(", ")

            var path: String? = null
            var httpMethod: String? = null

            element.getAnnotationsByType(RequestMapping::class.java).firstOrNull()?.let {
                path = it.path.joinToString("")
                httpMethod = it.method.joinToString { it.name }
            }

            // Detect specific HTTP method annotations
            element.getAnnotation(GetMapping::class.java)?.let {
                path = it.path.joinToString("")
                httpMethod = "GET"
            }

            element.getAnnotation(PostMapping::class.java)?.let {
                path = it.path.joinToString("")
                httpMethod = "POST"
            }

            // Combine with class-level RequestMapping if available
            element.enclosingElement.getAnnotation(RequestMapping::class.java)?.let {
                path = it.value.joinToString("") + "/" + path
            }
            val endpointData = mapOf(
                "path" to path,
                "method" to httpMethod,
                "roles" to roles
            )
            endpointList.add(endpointData)
            // Serialize to JSON
            val jsonData = gson.toJson(mapOf("endpoints" to endpointList))
            File("endpoints.json").writeText(jsonData)

            val resourcePath = "src/main/resources/json"
            ensureDirectoryExists(resourcePath)

            writeJsonToFile(resourcePath, jsonData)

            return true
        }
        return true
    }

    private fun writeJsonToFile(directoryPath: String, jsonContent: String) {
        ensureDirectoryExists(directoryPath)
        val filename = generateFilename()
        val path = Paths.get(directoryPath, filename)
        try {
            Files.write(path, jsonContent.toByteArray(), StandardOpenOption.CREATE_NEW)
            println("JSON written to: $path")
        } catch (e: Exception) {
            println("Failed to write JSON: $e")
        }
    }

    private fun generateFilename(): String {
        val dateTime = LocalDateTime.now()
        val formatter = DateTimeFormatter.ofPattern("MMddyyyy_HHmm")
        val formattedDateTime = dateTime.format(formatter)
        return "helix_$formattedDateTime.json"
    }

    private fun ensureDirectoryExists(directoryPath: String) {
        val path: Path = Paths.get(directoryPath)
        if (!Files.exists(path)) {
            try {
                Files.createDirectories(path)
                println("Directory created: $directoryPath")
            } catch (e: Exception) {
                println("Failed to create directory: $e")
            }
        } else {
            println("Directory already exists: $directoryPath")
        }
    }
}

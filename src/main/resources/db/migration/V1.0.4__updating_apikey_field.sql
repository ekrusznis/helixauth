-- Step 1: Add columns without NOT NULL constraint
ALTER TABLE api_key
ADD COLUMN IF NOT EXISTS public_key TEXT,
ADD COLUMN IF NOT EXISTS secret_key TEXT;

-- Step 2: Populate the new columns with unique keys for existing rows
-- Example - This will need to be replaced with your method of generating unique keys
UPDATE api_key SET public_key = 'some_generated_public_key', secret_key = 'some_generated_secret_key' WHERE public_key IS NULL OR secret_key IS NULL;

-- Step 3: Alter the columns to add the NOT NULL constraint
ALTER TABLE api_key
ALTER COLUMN public_key SET NOT NULL,
ALTER COLUMN secret_key SET NOT NULL;

-- Step 4: Add the UNIQUE constraint
ALTER TABLE api_key
ADD CONSTRAINT unique_public_key UNIQUE (public_key),
ADD CONSTRAINT unique_secret_key UNIQUE (secret_key);

DROP TABLE IF EXISTS endpoint_config_role;

DROP TABLE IF EXISTS endpoint_config;

CREATE TABLE company_settings (
    id SERIAL PRIMARY KEY,
    settings JSONB NOT NULL,
    company_id INT UNIQUE NOT NULL,
    CONSTRAINT fk_company
    FOREIGN KEY (company_id)
    REFERENCES company(id)
    ON DELETE CASCADE
);

CREATE TABLE specs (
    id SERIAL PRIMARY KEY,
    path VARCHAR(255) NOT NULL,
    operation VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL DEFAULT '',
    service VARCHAR(255) NOT NULL DEFAULT '',
    labels JSONB NULL,
    hits INT NOT NULL DEFAULT 0,
    roles JSONB NOT NULL,
    company_id BIGINT NOT NULL,
    FOREIGN KEY (company_id) REFERENCES company(id)
);

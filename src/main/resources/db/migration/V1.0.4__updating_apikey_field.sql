ALTER TABLE api_key
ADD COLUMN IF NOT EXISTS public_key TEXT NOT NULL UNIQUE,
ADD COLUMN IF NOT EXISTS secret_key TEXT NOT NULL UNIQUE;

DROP TABLE IF EXISTS endpoint_config_role;

DROP TABLE IF EXISTS endpoint_config;

CREATE TABLE company_settings (
    id SERIAL PRIMARY KEY,
    settings JSONB NOT NULL,
    company_id INT UNIQUE NOT NULL,
    CONSTRAINT fk_company
    FOREIGN KEY (company_id)
    REFERENCES companies(id)
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

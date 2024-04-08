CREATE TABLE IF NOT EXISTS account_cancellation (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    company_id BIGINT NOT NULL,
    requested_date DATE NOT NULL,
    user_id BIGINT NOT NULL,
    cancel_date DATE,
    cancellation_status VARCHAR(255) NOT NULL,
    CONSTRAINT fk_account_cancellation_company FOREIGN KEY (company_id)
        REFERENCES company (id),
    CONSTRAINT fk_account_cancellation_user FOREIGN KEY (user_id)
        REFERENCES users (id)
);

ALTER TABLE users
ADD COLUMN IF NOT EXISTS session_token VARCHAR(255);

ALTER TABLE users
ADD COLUMN IF NOT EXISTS session_token_expiry TIMESTAMP;

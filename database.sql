CREATE DATABASE food_delivery_db;

CREATE TABLE Organizations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE Items (
    id SERIAL PRIMARY KEY,
    type VARCHAR(20) NOT NULL, -- e.g., "perishable" or "non-perishable"
    description TEXT NOT NULL
);

CREATE TABLE Pricing (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER REFERENCES Organizations(id),
    item_id INTEGER REFERENCES Items(id),
    zone VARCHAR(20) NOT NULL,
    base_distance_in_km FLOAT NOT NULL,
    km_price FLOAT NOT NULL,
    base_price FLOAT NOT NULL
);


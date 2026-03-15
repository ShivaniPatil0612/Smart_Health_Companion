CREATE DATABASE wellness_db;
show databases;

USE wellness_db;

SHOW TABLES;
CREATE TABLE users (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255),
    role VARCHAR(20)
);
CREATE TABLE physical_health (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    steps INT,
    water DOUBLE,
    sleep DOUBLE,
    calories INT,
    date DATETIME,

    user_id BIGINT,
    CONSTRAINT fk_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
);

CREATE TABLE nutrition_data (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    meal_type VARCHAR(100),
    food_item VARCHAR(100),
    quantity INT,
    calories INT,
    date DATE,
    user_id BIGINT,
    
    CONSTRAINT fk_nutrition_user
    FOREIGN KEY (user_id)
    REFERENCES users(id)
    ON DELETE CASCADE
);
CREATE TABLE bmi_records (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,

    weight DOUBLE,
    height DOUBLE,
    bmi DOUBLE,
    category VARCHAR(50),

    date DATETIME,

    user_id BIGINT,

    CONSTRAINT fk_bmi_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
);
CREATE TABLE mental_wellness (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    mood VARCHAR(50),
    stress_level INT,
    meditation_minutes INT,
    date DATETIME,

    user_id BIGINT,

    CONSTRAINT fk_mental_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
);

CREATE TABLE workouts (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    exercise_type VARCHAR(100),
    duration INT,
    calories_burned INT,
    date DATETIME DEFAULT CURRENT_TIMESTAMP,

    user_id BIGINT,

    CONSTRAINT fk_workout_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
);

select * from users;
DESCRIBE physical_health;
select * from physical_health;
DESCRIBE nutrition_data;
select * from nutrition_data;
DESCRIBE bmi_records;
select * from bmi_records;

DESCRIBE workouts;
select * from workouts;

DESCRIBE mental_wellness;
select * from mental_wellness;

select * from articles;
describe blogs;
select * from blogs;

describe articles;


describe otp_codes;
select * from otp_codes;

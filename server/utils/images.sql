CREATE TABLE
    images (
        id VARCHAR(255) PRIMARY KEY,
        url VARCHAR(255) NOT NULL,
        upload_date TIMESTAMP NOT NULL DEFAULT NOW (),
        description VARCHAR(255) NOT NULL,
        tags VARCHAR(255) NOT NULL,
        categories VARCHAR(55) NOT NULL,
        rating INTEGER NOT NULL DEFAULT 0,
        no_download INTEGER NOT NULL DEFAULT 0
    );

INSERT INTO
    images (id, url, description, tags, categories)
VALUES
    (
        '1',
        'https://cyf-images-fp.s3.eu-west-1.amazonaws.com/1687617876279_image_IMG_4743.jpg',
        'Description',
        'Tags',
        'photos'
    );


ALTER TABLE images
ADD COLUMN liked_by_users text[];

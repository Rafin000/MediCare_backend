-- This is an empty migration.

CREATE VIEW doctor_info AS
SELECT
  d.id AS doctor_id,
  u.first_name,
  u.last_name,
  u.username,
  u.email,
  d.phone_number,
  u.user_type,
  u.dob
FROM
  users u
JOIN
  doctors d 
WHERE u.user_type= "doctor"
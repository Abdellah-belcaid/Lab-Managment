
INSERT INTO `etablissement` (`adresse`, `email`, `gsm`, `nom`, `site_web`)
VALUES
  ('Address 1', 'email1@example.com', '1234567890', 'Etablissement 1', 'www.etablissement1.com'),
  ('Address 2', 'email2@example.com', '9876543210', 'Etablissement 2', 'www.etablissement2.com'),
  ('Address 3', 'email3@example.com', '4567891230', 'Etablissement 3', 'www.etablissement3.com'),
  ('Address 4', 'email4@example.com', '3216549870', 'Etablissement 4', 'www.etablissement4.com'),
  ('Address 5', 'email5@example.com', '7890123456', 'Etablissement 5', 'www.etablissement5.com'),
  ('Address 6', 'email6@example.com', '5432167890', 'Etablissement 6', 'www.etablissement6.com'),
  ('Address 7', 'email7@example.com', '9012345678', 'Etablissement 7', 'www.etablissement7.com'),
  ('Address 8', 'email8@example.com', '6789054321', 'Etablissement 8', 'www.etablissement8.com'),
  ('Address 9', 'email9@example.com', '2345678901', 'Etablissement 9', 'www.etablissement9.com'),
  ('Address 10', 'email10@example.com', '8901234567', 'Etablissement 10', 'www.etablissement10.com');
--  --
INSERT INTO `laboratoire` (`adresse`, `description`, `domaine`, `email`, `nom`, `responsable`, `telephone`, `etablissement_id`)
VALUES
  ('Address 1', 'Description 1', 'Domain 1', 'email1@example.com', 'Laboratoire 1', 'Responsible 1', '1234567890', 1),
  ('Address 2', 'Description 2', 'Domain 2', 'email2@example.com', 'Laboratoire 2', 'Responsible 2', '9876543210', 2),
  ('Address 3', 'Description 3', 'Domain 3', 'email3@example.com', 'Laboratoire 3', 'Responsible 3', '4567891230', 3),
  ('Address 4', 'Description 4', 'Domain 4', 'email4@example.com', 'Laboratoire 4', 'Responsible 4', '3216549870', 1),
  ('Address 5', 'Description 5', 'Domain 5', 'email5@example.com', 'Laboratoire 5', 'Responsible 5', '7890123456', 2),
  ('Address 6', 'Description 6', 'Domain 6', 'email6@example.com', 'Laboratoire 6', 'Responsible 6', '5432167890', 3),
  ('Address 7', 'Description 7', 'Domain 7', 'email7@example.com', 'Laboratoire 7', 'Responsible 7', '9012345678', 1),
  ('Address 8', 'Description 8', 'Domain 8', 'email8@example.com', 'Laboratoire 8', 'Responsible 8', '6789054321', 2),
  ('Address 9', 'Description 9', 'Domain 9', 'email9@example.com', 'Laboratoire 9', 'Responsible 9', '2345678901', 3),
  ('Address 10', 'Description 10', 'Domain 10', 'email10@example.com', 'Laboratoire 10', 'Responsible 10', '8901234567', 1);



INSERT INTO `membre` (`department`, `designation`, `email`, `name`, `phone_number`, `qualification`, `research_area`, `laboratoire_id`)
VALUES
  ('Department 1', 'Designation 1', 'email1@example.com', 'Membre 1', '1234567890', 'Qualification 1', 'Research Area 1', 1),
  ('Department 2', 'Designation 2', 'email2@example.com', 'Membre 2', '9876543210', 'Qualification 2', 'Research Area 2', 2),
  ('Department 3', 'Designation 3', 'email3@example.com', 'Membre 3', '4567891230', 'Qualification 3', 'Research Area 3', 3),
  ('Department 4', 'Designation 4', 'email4@example.com', 'Membre 4', '3216549870', 'Qualification 4', 'Research Area 4', 1),
  ('Department 5', 'Designation 5', 'email5@example.com', 'Membre 5', '7890123456', 'Qualification 5', 'Research Area 5', 2),
  ('Department 6', 'Designation 6', 'email6@example.com', 'Membre 6', '5432167890', 'Qualification 6', 'Research Area 6', 3),
  ('Department 7', 'Designation 7', 'email7@example.com', 'Membre 7', '9012345678', 'Qualification 7', 'Research Area 7', 1),
  ('Department 8', 'Designation 8', 'email8@example.com', 'Membre 8', '6789054321', 'Qualification 8', 'Research Area 8', 2),
  ('Department 9', 'Designation 9', 'email9@example.com', 'Membre 9', '2345678901', 'Qualification 9', 'Research Area 9', 3),
  ('Department 10', 'Designation 10', 'email10@example.com', 'Membre 10', '8901234567', 'Qualification 10', 'Research Area 10', 1);


INSERT INTO `projet` (`description`, `end_date`, `field`, `start_date`, `title`)
VALUES
  ('Lorem ipsum dolor sit amet, consectetur adipiscing elit.', '2023-12-31', 'Science', '2023-06-01', 'Project 1'),
  ('Sed ac nisi sed augue efficitur consequat.', '2024-05-15', 'Technology', '2023-07-10', 'Project 2'),
  ('Praesent vitae lectus euismod, euismod mauris sed, ultrices est.', '2024-09-30', 'Engineering', '2023-09-15', 'Project 3'),
  ('Fusce posuere justo at nisi rhoncus tincidunt.', '2024-02-28', 'Medicine', '2023-11-01', 'Project 4'),
  ('Vestibulum tincidunt justo nec commodo varius.', '2024-07-31', 'Arts', '2023-12-15', 'Project 5'),
  ('Etiam auctor mauris eu lorem ullamcorper, at malesuada nunc mattis.', '2024-11-30', 'Business', '2024-01-01', 'Project 6'),
  ('Nulla fringilla mi a fringilla tincidunt.', '2024-04-15', 'Education', '2024-02-10', 'Project 7'),
  ('Suspendisse vehicula felis non dui consectetur, at mattis risus ullamcorper.', '2024-08-31', 'Social Sciences', '2024-04-01', 'Project 8'),
  ('Phasellus in mi nec risus sollicitudin viverra.', '2024-01-31', 'Environment', '2024-06-15', 'Project 9'),
  ('Aliquam cursus velit a nisi consectetur, a bibendum urna fringilla.', '2024-06-30', 'Sports', '2024-08-01', 'Project 10');



INSERT INTO `dotation_project` (`membre_id`, `projet_id`, `endowment_amount`, `purpose`, `source`, `status`) VALUES
  (1, 1, 10000.0, 'Research Expenses', 'External Funding', 'Active'),
  (1, 2, 5000.0, 'Equipment Purchase', 'Government Grant', 'Inactive'),
  (2, 3, 8000.0, 'Conference Travel', 'University Funding', 'Active'),
  (2, 4, 15000.0, 'Research Project', 'Industry Sponsorship', 'Active'),
  (3, 5, 12000.0, 'Scholarship Program', 'Foundation Grant', 'Inactive'),
  (3, 6, 3000.0, 'Training Program', 'Internal Budget', 'Active'),
  (4, 7, 20000.0, 'Research Collaboration', 'International Grant', 'Active'),
  (4, 8, 6000.0, 'Publication Support', 'Department Funding', 'Active'),
  (5, 9, 9000.0, 'Workshop Organization', 'Corporate Sponsorship', 'Inactive'),
  (5, 10, 4000.0, 'Equipment Maintenance', 'Internal Funding', 'Active'),
  (6, 1, 18000.0, 'Field Research', 'Foundation Grant', 'Active'),
  (6, 2, 7500.0, 'Data Analysis', 'Government Grant', 'Inactive'),
  (7, 3, 5000.0, 'Student Scholarship', 'University Budget', 'Active'),
  (7, 4, 3000.0, 'Publication Grant', 'Research Institute Funding', 'Active'),
  (8, 5, 7000.0, 'Conference Attendance', 'Industry Sponsorship', 'Inactive'),
  (8, 6, 10000.0, 'Research Collaboration', 'International Grant', 'Active'),
  (9, 7, 4000.0, 'Workshop Organization', 'Department Funding', 'Active'),
  (9, 8, 6000.0, 'Research Project', 'Foundation Grant', 'Inactive'),
  (10, 9, 25000.0, 'Equipment Purchase', 'Government Grant', 'Active'),
  (10, 10, 9000.0, 'Training Program', 'Internal Budget', 'Active');


INSERT INTO `dotation_uca_rech` (`anne_affectation`) VALUES
    ('2022'),
    ('2023'),
    ('2024'),
    ('2025'),
    ('2026');

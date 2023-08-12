
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




/*
*********************************************************************************************/



INSERT INTO `etablissement` (`adresse`, `email`, `gsm`, `nom`, `site_web`)
VALUES
    ('123 Main Street', 'info@university1.edu', '+1 555-123-4567', 'University of Science', 'www.university1.edu'),
    ('456 Elm Avenue', 'contact@college2.edu', '+1 555-987-6543', 'College of Arts', 'www.college2.edu'),
    ('789 Oak Drive', 'info@university3.edu', '+1 555-234-5678', 'University of Technology', 'www.university3.edu'),
    ('321 Pine Lane', 'contact@college4.edu', '+1 555-876-5432', 'College of Medicine', 'www.college4.edu'),
    ('654 Cedar Road', 'info@university5.edu', '+1 555-345-6789', 'University of Business', 'www.university5.edu'),
    ('987 Maple Street', 'contact@college6.edu', '+1 555-654-3210', 'College of Engineering', 'www.college6.edu'),
    ('159 Oak Drive', 'info@university7.edu', '+1 555-987-6543', 'University of Arts', 'www.university7.edu'),
    ('753 Elm Avenue', 'contact@college8.edu', '+1 555-321-0987', 'College of Science', 'www.college8.edu'),
    ('852 Pine Lane', 'info@university9.edu', '+1 555-876-5432', 'University of Law', 'www.university9.edu'),
    ('357 Main Street', 'contact@college10.edu', '+1 555-234-5678', 'College of Social Sciences', 'www.college10.edu'),
    ('456 Cedar Road', 'info@university11.edu', '+1 555-567-8901', 'University of Education', 'www.university11.edu'),
    ('753 Oak Drive', 'contact@college12.edu', '+1 555-098-7654', 'College of Health Sciences', 'www.college12.edu'),
    ('951 Elm Avenue', 'info@university13.edu', '+1 555-432-1098', 'University of Agriculture', 'www.university13.edu'),
    ('258 Pine Lane', 'contact@college14.edu', '+1 555-987-6543', 'College of Architecture', 'www.college14.edu'),
    ('654 Main Street', 'info@university15.edu', '+1 555-321-0987', 'University of Music', 'www.university15.edu'),
    ('753 Cedar Road', 'contact@college16.edu', '+1 555-654-3210', 'College of Communication', 'www.college16.edu'),
    ('456 Oak Drive', 'info@university17.edu', '+1 555-098-7654', 'University of Pharmacy', 'www.university17.edu'),
    ('951 Elm Avenue', 'contact@college18.edu', '+1 555-432-1098', 'College of Nursing', 'www.college18.edu'),
    ('753 Pine Lane', 'info@university19.edu', '+1 555-567-8901', 'University of Psychology', 'www.university19.edu'),
    ('357 Main Street', 'contact@college20.edu', '+1 555-109-8765', 'College of Languages', 'www.college20.edu');



INSERT INTO `laboratoire`(`adresse`, `description`, `domaine`, `email`, `nom`, `responsable`, `telephone`, `etablissement_id`)
VALUES
    ('123 Main Street', 'Laboratory specializing in molecular biology research', 'Biotechnology', 'lab1@example.com', 'Molecular Research Lab', 'John Smith', '+1 555-123-4567', '1'),
    ('456 Elm Avenue', 'Laboratory focused on environmental science', 'Ecology', 'lab2@example.com', 'EcoLab', 'Sarah Johnson', '+1 555-987-6543', '3'),
    ('789 Oak Drive', 'Laboratory conducting pharmaceutical drug development', 'Pharmaceutics', 'lab3@example.com', 'Pharma Solutions', 'David Thompson', '+1 555-234-5678', '2'),
    ('321 Pine Lane', 'Laboratory specialized in genetic research', 'Genomics', 'lab4@example.com', 'Genetic Science Lab', 'Emily Brown', '+1 555-876-5432', '1'),
    ('654 Cedar Road', 'Laboratory focusing on neuroscience studies', 'Neurology', 'lab5@example.com', 'Neuro Research Center', 'Michael Wilson', '+1 555-345-6789', '4'),
    ('987 Maple Street', 'Laboratory specializing in biochemistry research', 'Biochemistry', 'lab6@example.com', 'BioChemLab', 'Jessica Davis', '+1 555-654-3210', '3'),
    ('159 Oak Drive', 'Laboratory conducting agricultural research', 'Agronomy', 'lab7@example.com', 'Agricultural Sciences Lab', 'Daniel Anderson', '+1 555-987-6543', '1'),
    ('753 Elm Avenue', 'Laboratory focused on renewable energy solutions', 'Energy', 'lab8@example.com', 'RenewLab', 'Sophia Lee', '+1 555-321-0987', '2'),
    ('852 Pine Lane', 'Laboratory specialized in nanotechnology research', 'Nanoscience', 'lab9@example.com', 'NanoTech Solutions', 'Ethan Johnson', '+1 555-876-5432', '3'),
    ('357 Main Street', 'Laboratory conducting cancer research', 'Oncology', 'lab10@example.com', 'Cancer Research Lab', 'Olivia Thomas', '+1 555-234-5678', '4'),
    ('456 Cedar Road', 'Laboratory specializing in ecology and conservation', 'Environmental Science', 'lab11@example.com', 'EcoConservation Lab', 'Noah Wilson', '+1 555-567-8901', '1'),
    ('753 Oak Drive', 'Laboratory focused on biomedical engineering', 'Biomedical Engineering', 'lab12@example.com', 'BioMedEng Lab', 'Emma Roberts', '+1 555-098-7654', '2'),
    ('951 Elm Avenue', 'Laboratory conducting climate change research', 'Climate Science', 'lab13@example.com', 'Climate Research Lab', 'Matthew Davis', '+1 555-432-1098', '3'),
    ('258 Pine Lane', 'Laboratory specialized in materials science', 'Materials Science', 'lab14@example.com', 'Materials Lab', 'Ava Brown', '+1 555-987-6543', '4'),
    ('654 Main Street', 'Laboratory focusing on artificial intelligence research', 'Artificial Intelligence', 'lab15@example.com', 'AI Research Lab', 'Liam Wilson', '+1 555-321-0987', '1'),
    ('753 Cedar Road', 'Laboratory specializing in microbiology research', 'Microbiology', 'lab16@example.com', 'MicroBio Lab', 'Charlotte Johnson', '+1 555-654-3210', '2'),
    ('456 Oak Drive', 'Laboratory conducting physics experiments', 'Physics', 'lab17@example.com', 'Physics Lab', 'Mason Thomas', '+1 555-098-7654', '3'),
    ('951 Elm Avenue', 'Laboratory focused on robotics and automation', 'Robotics', 'lab18@example.com', 'Robotics Lab', 'Sophia Roberts', '+1 555-432-1098', '4'),
    ('753 Pine Lane', 'Laboratory specialized in food science research', 'Food Science', 'lab19@example.com', 'Food Science Lab', 'Logan Brown', '+1 555-567-8901', '1'),
    ('357 Main Street', 'Laboratory conducting psychology studies', 'Psychology', 'lab20@example.com', 'Psychology Research Lab', 'Harper Wilson', '+1 555-109-8765', '2');


INSERT INTO `users`(`type`, `create_time`, `email`, `name`, `password`, `role`, `username`)
VALUES
    ('ADMIN', '2023-06-14 09:00:00', 'admin1@example.com', 'John Doe', 'password1', 'ADMIN', 'johndoe'),
    ('ADMIN', '2023-06-14 09:15:00', 'admin2@example.com', 'Jane Smith', 'password2', 'ADMIN', 'janesmith'),
    ('DIRECTOR', '2023-06-14 09:30:00', 'director1@example.com', 'Michael Johnson', 'password3', 'DIRECTOR', 'michaelj'),
    ('DIRECTOR', '2023-06-14 09:45:00', 'director2@example.com', 'Emily Davis', 'password4', 'DIRECTOR', 'emilyd'),
    ('DIRECTOR', '2023-06-14 10:00:00', 'director3@example.com', 'David Wilson', 'password5', 'DIRECTOR', 'davidw'),
    ('DIRECTOR', '2023-06-14 10:15:00', 'director4@example.com', 'Sarah Thompson', 'password6', 'DIRECTOR', 'saraht'),
    ('DIRECTOR', '2023-06-14 10:30:00', 'director5@example.com', 'Jessica Brown', 'password7', 'DIRECTOR', 'jessicab'),
    ('DIRECTOR', '2023-06-14 10:45:00', 'director6@example.com', 'Matthew Anderson', 'password8', 'DIRECTOR', 'matthewa'),
    ('MEMBRE', '2023-06-14 11:00:00', 'membre1@example.com', 'Andrew Roberts', 'password9', 'MEMBER', 'andrewr'),
    ('MEMBRE', '2023-06-14 11:15:00', 'membre2@example.com', 'Olivia Wilson', 'password10', 'MEMBER', 'oliviaw'),
    ('MEMBRE', '2023-06-14 11:30:00', 'membre3@example.com', 'Daniel Johnson', 'password11', 'MEMBER', 'danielj'),
    ('MEMBRE', '2023-06-14 11:45:00', 'membre4@example.com', 'Sophia Davis', 'password12', 'MEMBER', 'sophiad'),
    ('MEMBRE', '2023-06-14 12:00:00', 'membre5@example.com', 'James Brown', 'password13', 'MEMBER', 'jamesb'),
    ('MEMBRE', '2023-06-14 12:15:00', 'membre6@example.com', 'Charlotte Anderson', 'password14', 'MEMBER', 'charlottea'),
    ('MEMBRE', '2023-06-14 12:30:00', 'membre7@example.com', 'Benjamin Smith', 'password15', 'MEMBER', 'benjamins'),
    ('MEMBRE', '2023-06-14 12:45:00', 'membre8@example.com', 'Ava Johnson', 'password16', 'MEMBER', 'avaj'),
    ('MEMBRE', '2023-06-14 13:00:00', 'membre9@example.com', 'William Davis', 'password17', 'MEMBER', 'williamd'),
    ('MEMBRE', '2023-06-14 13:15:00', 'membre10@example.com', 'Sophie Wilson', 'password18', 'MEMBER', 'sophiew'),
    ('MEMBRE', '2023-06-14 13:30:00', 'membre11@example.com', 'Samuel Thompson', 'password19', 'MEMBER', 'samuelt'),
    ('MEMBRE', '2023-06-14 13:45:00', 'membre12@example.com', 'Ella Brown', 'password20', 'MEMBER', 'ellab');



    INSERT INTO `membre` (`department`, `designation`, `phone_number`, `qualification`, `research_area`, `id`, `laboratoire_id`)
VALUES
    ('Department of Biology', 'Research Assistant', '+1 555-123-4567', 'MSc in Biological Sciences', 'Genetics', '3', '1'),
    ('Department of Chemistry', 'Senior Researcher', '+1 555-987-6543', 'PhD in Chemistry', 'Organic Synthesis', '4', '3'),
    ('Department of Physics', 'Assistant Professor', '+1 555-234-5678', 'PhD in Physics', 'Astrophysics', '5', '2'),
    ('Department of Computer Science', 'Software Engineer', '+1 555-876-5432', 'BSc in Computer Science', 'Artificial Intelligence', '6', '4'),
    ('Department of Psychology', 'Research Associate', '+1 555-345-6789', 'MA in Psychology', 'Cognitive Neuroscience', '7', '1'),
    ('Department of Engineering', 'Project Manager', '+1 555-654-3210', 'BEng in Mechanical Engineering', 'Renewable Energy', '8', '3'),
    ('Department of Medicine', 'Physician', '+1 555-987-6543', 'MD in Internal Medicine', 'Cardiology', '9', '2'),
    ('Department of Environmental Science', 'Environmental Specialist', '+1 555-321-0987', 'MSc in Environmental Science', 'Ecology', '10', '4'),
    ('Department of Mathematics', 'Professor', '+1 555-876-5432', 'PhD in Mathematics', 'Number Theory', '11', '1'),
    ('Department of Linguistics', 'Lecturer', '+1 555-234-5678', 'MA in Linguistics', 'Syntax', '12', '3'),
    ('Department of Economics', 'Economist', '+1 555-567-8901', 'MSc in Economics', 'Macroeconomics', '13', '2'),
    ('Department of Sociology', 'Researcher', '+1 555-654-3210', 'PhD in Sociology', 'Social Movements', '14', '4'),
    ('Department of Education', 'Educational Consultant', '+1 555-098-7654', 'MA in Education', 'Curriculum Development', '15', '1'),
    ('Department of Anthropology', 'Anthropologist', '+1 555-432-1098', 'PhD in Anthropology', 'Cultural Anthropology', '16', '3'),
    ('Department of History', 'Historian', '+1 555-987-6543', 'MA in History', 'World War II', '17', '2'),
    ('Department of Literature', 'Assistant Professor', '+1 555-321-0987', 'PhD in Literature', 'American Poetry', '18', '4'),
    ('Department of Fine Arts', 'Artist', '+1 555-654-3210', 'BFA in Fine Arts', 'Sculpture', '19', '1'),
    ('Department of Communication', 'Journalist', '+1 555-098-7654', 'BA in Journalism', 'Broadcast Journalism', '20', '3');



INSERT INTO `director` (`expertise`, `office_number`, `shift_end_date`, `shift_start_date`, `id`)
VALUES
    ('Financial Management', 'Office 301', '2023-12-31', '2023-01-01', '3'),
    ('Marketing Strategy', 'Office 202', '2023-12-31', '2023-01-01', '4'),
    ('Operations Management', 'Office 403', '2023-12-31', '2023-01-01', '5'),
    ('Human Resources', 'Office 304', '2023-12-31', '2023-01-01', '6'),
    ('Information Technology', 'Office 205', '2023-12-31', '2023-01-01', '7'),
    ('Research and Development', 'Office 406', '2023-12-31', '2023-01-01', '8');






INSERT INTO `projet` (`description`, `end_date`, `field`, `start_date`, `title`)
VALUES
    ('Development of a mobile application for fitness tracking', '2023-06-30', 'Information Technology', '2023-01-01', 'Fitness App Development'),
    ('Study on the impact of climate change on biodiversity', '2022-12-15', 'Environmental Science', '2022-07-01', 'Climate Change and Biodiversity'),
    ('Implementation of a customer relationship management system', '2023-05-31', 'Business Management', '2023-02-01', 'CRM System Implementation'),
    ('Exploration of new drug candidates for cancer treatment', '2022-11-30', 'Pharmaceutical Research', '2022-09-01', 'Cancer Drug Discovery'),
    ('Design and development of a sustainable housing prototype', '2023-04-30', 'Architecture', '2023-01-15', 'Sustainable Housing Project'),
    ('Investigation of the effects of social media on mental health', '2022-10-31', 'Psychology', '2022-06-01', 'Social Media and Mental Health Study'),
    ('Development of an e-commerce platform for local artisans', '2023-03-31', 'Web Development', '2023-01-01', 'Artisan E-commerce Platform'),
    ('Research on renewable energy sources for sustainable power generation', '2022-09-30', 'Energy Engineering', '2022-03-01', 'Renewable Energy Research'),
    ('Analysis of financial market trends and forecasting', '2023-02-28', 'Finance', '2023-01-01', 'Financial Market Analysis'),
    ('Investigation of the impact of artificial intelligence on job automation', '2022-08-31', 'Artificial Intelligence', '2022-04-01', 'AI and Job Automation Study'),
    ('Development of a new vaccine for infectious diseases', '2023-01-31', 'Medical Research', '2022-11-01', 'Infectious Disease Vaccine Development'),
    ('Exploration of machine learning techniques for natural language processing', '2022-07-31', 'Machine Learning', '2022-05-01', 'Natural Language Processing with ML'),
    ('Design and construction of a sustainable urban park', '2023-01-15', 'Urban Planning', '2022-09-01', 'Sustainable Urban Park Project'),
    ('Investigation of consumer behavior and purchase decision-making', '2022-06-30', 'Marketing Research', '2022-03-01', 'Consumer Behavior Study'),
    ('Development of a mobile game with augmented reality features', '2023-01-31', 'Game Development', '2022-10-01', 'Augmented Reality Mobile Game'),
    ('Study on the impact of social media influencers on brand perception', '2022-05-31', 'Marketing', '2022-02-01', 'Influencer Marketing Research'),
    ('Analysis of data privacy and security in cloud computing', '2023-01-31', 'Cybersecurity', '2022-11-01', 'Cloud Computing Security Analysis'),
    ('Investigation of the effects of music therapy on mental health', '2022-04-30', 'Music Therapy', '2022-01-01', 'Music Therapy and Mental Health Study'),
    ('Development of a smart home automation system', '2023-01-31', 'Internet of Things', '2022-09-01', 'Smart Home Automation Project'),
    ('Exploration of sustainable agricultural practices', '2022-03-31', 'Agriculture', '2022-01-01', 'Sustainable Agriculture Research'),
    ('Research on the applications of blockchain technology in supply chain management', '2023-01-31', 'Blockchain', '2022-11-01', 'Blockchain in Supply Chain'),
    ('Investigation of the effects of exercise on cognitive function', '2022-02-28', 'Exercise Science', '2022-01-01', 'Exercise and Cognitive Function Study'),
    ('Development of a machine learning algorithm for fraud detection', '2023-01-31', 'Data Science', '2022-09-01', 'Fraud Detection Algorithm'),
    ('Study on the impact of social networks on interpersonal relationships', '2022-01-31', 'Sociology', '2022-01-01', 'Social Networks and Relationships Study'),
    ('Design and development of a mobile app for language learning', '2023-01-31', 'Language Education', '2022-11-01', 'Language Learning Mobile App'),
    ('Investigation of the effects of mindfulness meditation on stress reduction', '2022-01-15', 'Mindfulness', '2021-12-01', 'Mindfulness Meditation and Stress'),
    ('Development of a computer vision system for object recognition', '2023-01-31', 'Computer Vision', '2022-09-01', 'Object Recognition System'),
    ('Exploration of the impact of virtual reality on education', '2021-12-31', 'Virtual Reality', '2021-10-01', 'VR in Education Research'),
    ('Research on the optimization of supply chain logistics', '2023-01-31', 'Logistics', '2022-11-01', 'Supply Chain Optimization Research'),
    ('Investigation of the effects of sleep on cognitive performance', '2021-12-15', 'Sleep Science', '2021-09-01', 'Sleep and Cognitive Performance Study'),
    ('Development of a mobile app for mental health self-assessment', '2023-01-31', 'Mobile Health', '2022-09-01', 'Mental Health Self-Assessment App'),
    ('Study on the impact of social media on body image dissatisfaction', '2021-11-30', 'Social Psychology', '2021-07-01', 'Social Media and Body Image Study'),
    ('Design and implementation of a cloud-based file storage system', '2022-01-31', 'Cloud Computing', '2021-11-01', 'Cloud File Storage System'),
    ('Investigation of the effects of nutrition on athletic performance', '2021-11-15', 'Sports Science', '2021-08-01', 'Nutrition and Athletic Performance Study'),
    ('Development of a recommendation system for personalized movie suggestions', '2022-01-31', 'Artificial Intelligence', '2021-09-01', 'Movie Recommendation System'),
    ('Exploration of the impact of social media on political participation', '2021-10-31', 'Political Science', '2021-06-01', 'Social Media and Political Participation Study'),
    ('Research on the applications of augmented reality in medical training', '2022-01-31', 'Medical Education', '2021-11-01', 'Augmented Reality in Medical Training'),
    ('Investigation of the effects of workplace diversity on team performance', '2021-10-15', 'Organizational Behavior', '2021-07-01', 'Workplace Diversity and Team Performance Study'),
    ('Development of a machine learning model for credit risk assessment', '2022-01-31', 'Finance', '2021-09-01', 'Credit Risk Assessment Model'),
    ('Study on the impact of social media on adolescent mental health', '2021-09-30', 'Psychiatry', '2021-06-01', 'Social Media and Adolescent Mental Health Study'),
    ('Design and development of a mobile app for public transportation navigation', '2022-01-15', 'Mobile App Development', '2021-11-01', 'Public Transportation App'),
    ('Investigation of the effects of video games on cognitive abilities', '2021-09-30', 'Cognitive Psychology', '2021-05-01', 'Video Games and Cognitive Abilities Study'),
    ('Development of a chatbot for customer support in e-commerce', '2022-01-31', 'Artificial Intelligence', '2021-09-01', 'E-commerce Chatbot Development');




INSERT INTO `dotation_uca_rech` (`anne_affectation`, `description`, `title`)
VALUES
    ('2023', 'Funding for research project on sustainable energy solutions', 'Sustainable Energy Research Funding'),
    ('2022', 'Grant for interdisciplinary study on climate change adaptation', 'Climate Change Adaptation Research Grant'),
    ('2023', 'Scholarship for doctoral research in biotechnology', 'Biotechnology Research Scholarship'),
    ('2022', 'Funding for research project on artificial intelligence in healthcare', 'AI in Healthcare Research Funding'),
    ('2023', 'Grant for archaeological excavation and analysis', 'Archaeological Research Grant'),
    ('2022', 'Scholarship for postdoctoral research in neuroscience', 'Neuroscience Research Scholarship'),
    ('2023', 'Funding for research project on urban planning and sustainability', 'Urban Planning and Sustainability Research Funding'),
    ('2022', 'Grant for sociological study on inequality in education', 'Education Inequality Research Grant'),
    ('2023', 'Scholarship for doctoral research in environmental science', 'Environmental Science Research Scholarship'),
    ('2022', 'Funding for research project on renewable energy technologies', 'Renewable Energy Research Funding'),
    ('2023', 'Grant for psychological study on mental health in the workplace', 'Workplace Mental Health Research Grant'),
    ('2022', 'Scholarship for postdoctoral research in computer science', 'Computer Science Research Scholarship'),
    ('2023', 'Funding for research project on sustainable agriculture practices', 'Sustainable Agriculture Research Funding'),
    ('2022', 'Grant for historical research on cultural heritage preservation', 'Cultural Heritage Research Grant'),
    ('2023', 'Scholarship for doctoral research in biomedical engineering', 'Biomedical Engineering Research Scholarship'),
    ('2022', 'Funding for research project on cybersecurity and data privacy', 'Cybersecurity Research Funding'),
    ('2023', 'Grant for linguistic study on language acquisition in children', 'Language Acquisition Research Grant'),
    ('2022', 'Scholarship for postdoctoral research in social psychology', 'Social Psychology Research Scholarship'),
    ('2023', 'Funding for research project on cancer diagnosis and treatment', 'Cancer Research Funding'),
    ('2022', 'Grant for economic study on the impact of globalization', 'Globalization Impact Research Grant'),
    ('2023', 'Scholarship for doctoral research in materials science', 'Materials Science Research Scholarship'),
    ('2022', 'Funding for research project on urban transportation systems', 'Urban Transportation Research Funding'),
    ('2023', 'Grant for educational study on innovative teaching methods', 'Innovative Teaching Research Grant'),
    ('2022', 'Scholarship for postdoctoral research in biochemistry', 'Biochemistry Research Scholarship'),
    ('2023', 'Funding for research project on climate change mitigation strategies', 'Climate Change Mitigation Research Funding'),
    ('2022', 'Grant for anthropological study on indigenous cultures', 'Indigenous Cultures Research Grant'),
    ('2023', 'Scholarship for doctoral research in computer engineering', 'Computer Engineering Research Scholarship'),
    ('2022', 'Funding for research project on sustainable urban development', 'Sustainable Urban Development Research Funding'),
    ('2023', 'Grant for educational study on inclusive classrooms', 'Inclusive Education Research Grant'),
    ('2022', 'Scholarship for postdoctoral research in physics', 'Physics Research Scholarship'),
    ('2023', 'Funding for research project on renewable energy policy', 'Renewable Energy Policy Research Funding'),
    ('2022', 'Grant for sociolinguistic study on language variation', 'Language Variation Research Grant'),
    ('2023', 'Scholarship for doctoral research in neuroscience', 'Neuroscience Research Scholarship'),
    ('2022', 'Funding for research project on data science and analytics', 'Data Science Research Funding'),
    ('2023', 'Grant for archaeological study on ancient civilizations', 'Archaeological Research Grant'),
    ('2022', 'Scholarship for postdoctoral research in environmental studies', 'Environmental Studies Research Scholarship'),
    ('2023', 'Funding for research project on sustainable architecture', 'Sustainable Architecture Research Funding'),
    ('2022', 'Grant for educational study on online learning platforms', 'Online Learning Research Grant'),
    ('2023', 'Scholarship for doctoral research in genetics', 'Genetics Research Scholarship'),
    ('2022', 'Funding for research project on cybersecurity and privacy', 'Cybersecurity and Privacy Research Funding'),
    ('2023', 'Grant for linguistic study on bilingualism and cognition', 'Bilingualism and Cognition Research Grant'),
    ('2022', 'Scholarship for postdoctoral research in social sciences', 'Social Sciences Research Scholarship');



INSERT INTO `type_besoin`(`type`) VALUES
    ('SMALL_TOOLS_EQUIPMENT_PURCHASE'),
    ('COMPUTER_SUPPLIES_PURCHASE'),
    ('OFFICE_SUPPLIES_PURCHASE'),
    ('RAW_MATERIALS_PURCHASE'),
    ('FUEL_PURCHASE'),
    ('SCIENTIFIC_EQUIPMENT_PURCHASE'),
    ('COMPUTER_EQUIPMENT_PURCHASE'),
    ('TRAVEL_EXPENSES_ABROAD'),
    ('TRAVEL_EXPENSES_IN_COUNTRY'),
    ('KILOMETER_ALLOWANCE'),
    ('MISSION_EXPENSES_ABROAD'),
    ('PARTICIPATION_FEES');



    INSERT INTO `expression_besoin`(`description`, `demande_date`, `is_valid`, `montant_approximatif`, `montant_effectif`, `validat_date`, `membre_id`, `type_besoin_id`) VALUES
    ('Purchase of small tools for maintenance', '2023-06-01', 1, 150.00, 145.50, '2023-06-05', 6, 1),
    ('Acquisition of computer supplies for the office', '2023-05-15', 1, 200.00, 198.75, '2023-05-20', 7, 2),
    ('Restocking office supplies for various departments', '2023-06-10', 1, 100.00, 97.80, '2023-06-15', 8, 3),
    ('Purchase of raw materials for production', '2023-05-20', 1, 500.00, 485.25, '2023-05-25', 9, 4),
    ('Fuel purchase for company vehicles', '2023-06-05', 1, 300.00, 290.50, '2023-06-10', 10, 5),
    ('Acquisition of scientific equipment for research', '2023-05-25', 1, 1000.00, 995.75, '2023-05-30', 11, 6),
    ('Upgrade of computer equipment for the IT department', '2023-06-15', 1, 2000.00, 1987.50, '2023-06-20', 12, 7),
    ('Travel expenses abroad for conference attendance', '2023-06-10', 1, 1500.00, 1485.25, '2023-06-15', 6, 1),
    ('Reimbursement of travel expenses within the country', '2023-06-05', 1, 500.00, 490.50, '2023-06-10', 7, 2),
    ('Payment of kilometer allowance for business travel', '2023-05-25', 1, 200.00, 197.75, '2023-05-30', 8, 3),
    ('Mission expenses abroad for project implementation', '2023-06-15', 1, 3000.00, 2985.75, '2023-06-20', 9, 4),
    ('Payment of participation fees for training program', '2023-05-30', 1, 500.00, 495.25, '2023-06-05', 10, 5),
    ('Purchase of small tools for maintenance', '2023-06-01', 1, 150.00, 145.50, '2023-06-05', 11, 6),
    ('Acquisition of computer supplies for the office', '2023-05-15', 1, 200.00, 198.75, '2023-05-20', 12, 7),
    ('Restocking office supplies for various departments', '2023-06-10', 1, 100.00, 97.80, '2023-06-15', 6, 1),
    ('Purchase of raw materials for production', '2023-05-20', 1, 500.00, 485.25, '2023-05-25', 7, 2),
    ('Fuel purchase for company vehicles', '2023-06-05', 1, 300.00, 290.50, '2023-06-10', 8, 3),
    ('Acquisition of scientific equipment for research', '2023-05-25', 1, 1000.00, 995.75, '2023-05-30', 9, 4),
    ('Upgrade of computer equipment for the IT department', '2023-06-15', 1, 2000.00, 1987.50, '2023-06-20', 10, 5),
    ('Travel expenses abroad for conference attendance', '2023-06-10', 1, 1500.00, 1485.25, '2023-06-15', 11, 6),
    ('Reimbursement of travel expenses within the country', '2023-06-05', 1, 500.00, 490.50, '2023-06-10', 12, 7),
    ('Payment of kilometer allowance for business travel', '2023-05-25', 1, 200.00, 197.75, '2023-05-30', 6, 1),
    ('Mission expenses abroad for project implementation', '2023-06-15', 1, 3000.00, 2985.75, '2023-06-20', 7, 2),
    ('Payment of participation fees for training program', '2023-05-30', 1, 500.00, 495.25, '2023-06-05', 8, 3),
    ('Purchase of small tools for maintenance', '2023-06-01', 1, 150.00, 145.50, '2023-06-05', 9, 4),
    ('Acquisition of computer supplies for the office', '2023-05-15', 1, 200.00, 198.75, '2023-05-20', 10, 5),
    ('Restocking office supplies for various departments', '2023-06-10', 1, 100.00, 97.80, '2023-06-15', 11, 6),
    ('Purchase of raw materials for production', '2023-05-20', 1, 500.00, 485.25, '2023-05-25', 12, 7),
    ('Fuel purchase for company vehicles', '2023-06-05', 1, 300.00, 290.50, '2023-06-10', 6, 1),
    ('Acquisition of scientific equipment for research', '2023-05-25', 1, 1000.00, 995.75, '2023-05-30', 7, 2),
    ('Upgrade of computer equipment for the IT department', '2023-06-15', 1, 2000.00, 1987.50, '2023-06-20', 8, 3),
    ('Travel expenses abroad for conference attendance', '2023-06-10', 1, 1500.00, 1485.25, '2023-06-15', 9, 4),
    ('Reimbursement of travel expenses within the country', '2023-06-05', 1, 500.00, 490.50, '2023-06-10', 10, 5),
    ('Payment of kilometer allowance for business travel', '2023-05-25', 1, 200.00, 197.75, '2023-05-30', 11, 6),
    ('Mission expenses abroad for project implementation', '2023-06-15', 1, 3000.00, 2985.75, '2023-06-20', 12, 7),
    ('Payment of participation fees for training program', '2023-05-30', 1, 500.00, 495.25, '2023-06-05', 6, 1),
    ('Purchase of small tools for maintenance', '2023-06-01', 1, 150.00, 145.50, '2023-06-05', 7, 2),
    ('Acquisition of computer supplies for the office', '2023-05-15', 1, 200.00, 198.75, '2023-05-20', 8, 3),
    ('Restocking office supplies for various departments', '2023-06-10', 1, 100.00, 97.80, '2023-06-15', 9, 4),
    ('Purchase of raw materials for production', '2023-05-20', 1, 500.00, 485.25, '2023-05-25', 10, 5),
    ('Fuel purchase for company vehicles', '2023-06-05', 1, 300.00, 290.50, '2023-06-10', 11, 6),
    ('Acquisition of scientific equipment for research', '2023-05-25', 1, 1000.00, 995.75, '2023-05-30', 12, 7),
    ('Upgrade of computer equipment for the IT department', '2023-06-15', 1, 2000.00, 1987.50, '2023-06-20', 6, 1),
    ('Travel expenses abroad for conference attendance', '2023-06-10', 1, 1500.00, 1485.25, '2023-06-15', 7, 2),
    ('Reimbursement of travel expenses within the country', '2023-06-05', 1, 500.00, 490.50, '2023-06-10', 8, 3),
    ('Payment of kilometer allowance for business travel', '2023-05-25', 1, 200.00, 197.75, '2023-05-30', 9, 4),
    ('Mission expenses abroad for project implementation', '2023-06-15', 1, 3000.00, 2985.75, '2023-06-20', 10, 5),
    ('Payment of participation fees for training program', '2023-05-30', 1, 500.00, 495.25, '2023-06-05', 11, 6),
    ('Purchase of small tools for maintenance', '2023-06-01', 1, 150.00, 145.50, '2023-06-05', 12, 7),
    ('Acquisition of computer supplies for the office', '2023-05-15', 1, 200.00, 198.75, '2023-05-20', 6, 1),
    ('Restocking office supplies for various departments', '2023-06-10', 1, 100.00, 97.80, '2023-06-15', 7, 2),
    ('Purchase of raw materials for production', '2023-05-20', 1, 500.00, 485.25, '2023-05-25', 8, 3),
    ('Fuel purchase for company vehicles', '2023-06-05', 1, 300.00, 290.50, '2023-06-10', 9, 4),
    ('Acquisition of scientific equipment for research', '2023-05-25', 1, 1000.00, 995.75, '2023-05-30', 10, 5),
    ('Upgrade of computer equipment for the IT department', '2023-06-15', 1, 2000.00, 1987.50, '2023-06-20', 11, 6),
    ('Travel expenses abroad for conference attendance', '2023-06-10', 1, 1500.00, 1485.25, '2023-06-15', 12, 7),
    ('Reimbursement of travel expenses within the country', '2023-06-05', 1, 500.00, 490.50, '2023-06-10', 6, 1),
    ('Payment of kilometer allowance for business travel', '2023-05-25', 1, 200.00, 197.75, '2023-05-30', 7, 2),
    ('Mission expenses abroad for project implementation', '2023-06-15', 1, 3000.00, 2985.75, '2023-06-20', 8, 3),
    ('Payment of participation fees for training program', '2023-05-30', 1, 500.00, 495.25, '2023-06-05', 9, 4),
    ('Purchase of small tools for maintenance', '2023-06-01', 1, 150.00, 145.50, '2023-06-05', 10, 5),
    ('Acquisition of computer supplies for the office', '2023-05-15', 1, 200.00, 198.75, '2023-05-20', 11, 6),
    ('Restocking office supplies for various departments', '2023-06-10', 1, 100.00, 97.80, '2023-06-15', 12, 7),
    ('Purchase of raw materials for production', '2023-05-20', 1, 500.00, 485.25, '2023-05-25', 6, 1),
    ('Fuel purchase for company vehicles', '2023-06-05', 1, 300.00, 290.50, '2023-06-10', 7, 2),
    ('Acquisition of scientific equipment for research', '2023-05-25', 1, 1000.00, 995.75, '2023-05-30', 8, 3),
    ('Upgrade of computer equipment for the IT department', '2023-06-15', 1, 2000.00, 1987.50, '2023-06-20', 9, 4),
    ('Travel expenses abroad for conference attendance', '2023-06-10', 1, 1500.00, 1485.25, '2023-06-15', 10, 5),
    ('Reimbursement of travel expenses within the country', '2023-06-05', 1, 500.00, 490.50, '2023-06-10', 11, 6),
    ('Payment of kilometer allowance for business travel', '2023-05-25', 1, 200.00, 197.75, '2023-05-30', 12, 7),
    ('Mission expenses abroad for project implementation', '2023-06-15', 1, 3000.00, 2985.75, '2023-06-20', 6, 1),
    ('Payment of participation fees for training program', '2023-05-30', 1, 500.00, 495.25, '2023-06-05', 7, 2),
    ('Purchase of small tools for maintenance', '2023-06-01', 1, 150.00, 145.50, '2023-06-05', 8, 3),
    ('Acquisition of computer supplies for the office', '2023-05-15', 1, 200.00, 198.75, '2023-05-20', 9, 4),
    ('Restocking office supplies for various departments', '2023-06-10', 1, 100.00, 97.80, '2023-06-15', 10, 5),
    ('Purchase of raw materials for production', '2023-05-20', 1, 500.00, 485.25, '2023-05-25', 11, 6),
    ('Fuel purchase for company vehicles', '2023-06-05', 1, 300.00, 290.50, '2023-06-10', 12, 7),
    ('Acquisition of scientific equipment for research', '2023-05-25', 1, 1000.00, 995.75, '2023-05-30', 6, 1),
    ('Upgrade of computer equipment for the IT department', '2023-06-15', 1, 2000.00, 1987.50, '2023-06-20', 7, 2),
    ('Travel expenses abroad for conference attendance', '2023-06-10', 1, 1500.00, 1485.25, '2023-06-15', 8, 3),
    ('Reimbursement of travel expenses within the country', '2023-06-05', 1, 500.00, 490.50, '2023-06-10', 9, 4),
    ('Payment of kilometer allowance for business travel', '2023-05-25', 1, 200.00, 197.75, '2023-05-30', 10, 5),
    ('Mission expenses abroad for project implementation', '2023-06-15', 1, 3000.00, 2985.75, '2023-06-20', 11, 6),
    ('Payment of participation fees for training program', '2023-05-30', 1, 500.00, 495.25, '2023-06-05', 12, 7),
    ('Purchase of small tools for maintenance', '2023-06-01', 1, 150.00, 145.50, '2023-06-05', 6, 1),
    ('Acquisition of computer supplies for the office', '2023-05-15', 1, 200.00, 198.75, '2023-05-20', 7, 2),
    ('Restocking office supplies for various departments', '2023-06-10', 1, 100.00, 97.80, '2023-06-15', 8, 3),
    ('Purchase of raw materials for production', '2023-05-20', 1, 500.00, 485.25, '2023-05-25', 9, 4),
    ('Fuel purchase for company vehicles', '2023-06-05', 1, 300.00, 290.50, '2023-06-10', 10, 5),
    ('Acquisition of scientific equipment for research', '2023-05-25', 1, 1000.00, 995.75, '2023-05-30', 11, 6),
    ('Upgrade of computer equipment for the IT department', '2023-06-15', 1, 2000.00, 1987.50, '2023-06-20', 12, 7);




INSERT INTO `dotation_project`(`membre_id`, `projet_id`, `endowment_amount`, `purpose`, `source`, `status`)
VALUES
    (5, 1, 5000, 'Funding for research equipment', 'Internal funds', 'Approved'),
    (6, 2, 8000, 'Funding for conference participation', 'External grant', 'Pending'),
    (7, 3, 3000, 'Funding for laboratory supplies', 'Department funds', 'Approved'),
    (8, 4, 6000, 'Funding for fieldwork expenses', 'Research grant', 'Rejected'),
    (9, 5, 2000, 'Funding for data analysis software', 'Institutional support', 'Approved'),
    (5, 6, 4000, 'Funding for publication fees', 'Research grant', 'Pending'),
    (6, 7, 7000, 'Funding for hiring research assistants', 'External sponsor', 'Approved'),
    (7, 8, 1500, 'Funding for workshop organization', 'Department funds', 'Approved'),
    (8, 9, 9000, 'Funding for travel expenses', 'Research grant', 'Pending'),
    (9, 10, 2500, 'Funding for research materials', 'Internal funds', 'Approved'),
    (5, 11, 3500, 'Funding for data collection', 'Research grant', 'Rejected'),
    (6, 12, 5500, 'Funding for collaboration with other institutions', 'External grant', 'Approved'),
    (7, 13, 4000, 'Funding for equipment maintenance', 'Department funds', 'Approved'),
    (8, 14, 6500, 'Funding for research stipend', 'Research grant', 'Pending'),
    (9, 15, 3000, 'Funding for software licenses', 'Institutional support', 'Approved'),
    (5, 16, 5000, 'Funding for publication expenses', 'Research grant', 'Pending'),
    (6, 17, 7500, 'Funding for conference organization', 'External sponsor', 'Approved'),
    (7, 18, 2000, 'Funding for data storage', 'Department funds', 'Approved'),
    (8, 19, 8000, 'Funding for workshop attendance', 'Research grant', 'Rejected'),
    (9, 20, 1500, 'Funding for research incentives', 'Internal funds', 'Approved'),
    (5, 21, 4500, 'Funding for data analysis services', 'Research grant', 'Pending'),
    (6, 22, 6500, 'Funding for equipment upgrade', 'External grant', 'Approved'),
    (7, 23, 2500, 'Funding for research publication', 'Department funds', 'Approved'),
    (8, 24, 7000, 'Funding for research conference travel', 'Research grant', 'Pending');


INSERT INTO `dotation_membre`(`membre_id`, `uca_rech_id`, `anne_affecter`, `montant`)
VALUES
    (5, 1, 2023, 5000),
    (6, 2, 2022, 8000),
    (7, 3, 2023, 3000),
    (8, 4, 2022, 6000),
    (9, 5, 2023, 2000),
    (5, 6, 2022, 4000),
    (6, 7, 2023, 7000),
    (7, 8, 2022, 1500),
    (8, 9, 2023, 9000),
    (9, 10, 2022, 2500),
    (5, 11, 2023, 3500),
    (6, 12, 2022, 5500),
    (7, 13, 2023, 4000),
    (8, 14, 2022, 6500),
    (9, 15, 2023, 3000),
    (5, 16, 2022, 5000),
    (6, 17, 2023, 7500),
    (7, 18, 2022, 2000),
    (8, 19, 2023, 8000),
    (9, 20, 2022, 1500),
    (5, 21, 2023, 4500),
    (6, 22, 2022, 6500),
    (7, 23, 2023, 2500),
    (8, 24, 2022, 7000);

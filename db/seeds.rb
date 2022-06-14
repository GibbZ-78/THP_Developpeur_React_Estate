########################
#                      #
#     REACT ESTATE     #
#  Official seed file  #
#                      #
#  THP Dev Winter 2022 #
#                      #
########################

# Notice: requires the "faker" and "database_cleaner" gems to be part of your Rails environment (ex. via Gemfile)

# Erase the content of all tables, hence reseting the related "id" counters
DatabaseCleaner.clean_with(:truncation)

  ############################
 #                            #
#  CREATION OF STANDARD USERS  #
 #                            #
  ############################

# TO DO: At this stage (2002/06/14 02:31 PM), the "User" model solely contains "Devise mandatory fields", i.e. email and (encrypted_)password. 
#        If time allows, would be nice to add "first_name", "last_name", "birthdate", "gender", "photo_url", "role" (0: user, 1: admin)...
puts
puts "SEEDING - Creation of fake users"
puts


puts "  > Starts seeding 'Standard User' information"
10.times do |x|
	xstr = x+1 < 9 ? "0#{x+1}" : (x+1).to_s 
  # User.create(first_name: Faker::Name.first_name, 
  #             last_name: Faker::Name.last_name, 
  #             password: "THP2022", 
  #             email: "user_#{xstr}@yopmail.com", 
  #             birthdate: Faker::Date.birthday(min_age: 18, max_age: 100),
  #             gender: Faker::Gender.binary_type,
  #             photo_url:"student_#{xstr}.jpg",
  #             role:0)
  # puts "  > [Full version] Student n°: #{User.last.id} - first_name: #{User.last.first_name} - last_name: #{User.last.last_name} - email: #{User.last.email} - password: #{User.last.encrypted_password} - birthdate: #{User.last.birthdate}"
  User.create(password: "THP2022", 
              email: "user_react_estate#{xstr}@yopmail.com")
  puts "  > [Limited version] User ID: #{User.last.id} - User mail: #{User.last.email} - User password (encrypted): #{User.last.encrypted_password}"
end
puts "  > Finished seeding 'Standard User'"


############################
#                          #
#  CREATION OF ADMIN USER  #
#                          #
################################
#  id: integer                 #
#  email: string               #
#  encrypted_password: string  #
################################

# Seeding DB with 1 administrator
puts "  > Starts seeding unique admin information"
# User.create(first_name: "admin", 
            # last_name: "admin", 
            # password: "THP2022", 
            # email: "admin_react_estate@yopmail.com",
            # birthdate: Faker::Date.birthday(min_age: 18, max_age: 100),
            # gender: Faker::Gender.binary_type,
            # photo_url:"photo_admin.jpg",
            # role:1)
User.create(password: "THP2022",
            email: "admin_react_estate@yopmail.com")
puts "  > [Limited version] Admin ID: #{User.last.id} - Admin mail: #{User.last.email} - Admin password (encrypted): #{User.last.encrypted_password}"
puts "  > Finished seeding the one and only 'Admin'"


################################
#                              #
#  CREATION OF PROPERTY TYPES  #
#                              #
#################################
#  id: integer                  #
#  property_type_title: string  #
#  property_type_descr: text    #
#################################

puts "  > Starts seeding 'PropertyTypes'"
PropertyType.create(property_type_title: "House", property_type_descr: "Detached and self-contained residence building with its own front door onto the street.")
PropertyType.create(property_type_title: "Flat / Appartment", property_type_descr: "self-contained set of rooms within a shared building.")
PropertyType.create(property_type_title: "Penthouse", property_type_descr: "Luxuriously fitted and spaceous flat / apartment on the top floor of a tall modern building")
PropertyType.create(property_type_title: "Loft", property_type_descr: "Spaceous room or flat directly under the roof of a house or other building, converted and used for accommodation.")
PropertyType.create(property_type_title: "Castle", property_type_descr: "Large building, typically of the medieval period, fortified against attack with thick walls, battlements, towers, and in many cases a moat.")
PropertyType.create(property_type_title: "Parking spot", property_type_descr: "Place in a parking lot / car park to park one (motor) vehicule.")
PropertyType.create(property_type_title: "Garage / Closed parking box", property_type_descr: "(Place in a) building for housing motor vehicles.")
PropertyType.create(property_type_title: "Building plot", property_type_descr: "Piece of land on which a house or buidling can be built.")
PropertyType.create(property_type_title: "Warehouse", property_type_descr: "Large building, often made of bricks and/or metal, where great quantities raw materials or manufactured goods may be stored prior to their distribution for sale.")
PropertyType.create(property_type_title: "Manor", property_type_descr: "Large country house with lands, generally haunted if in Scotland.")
PropertyType.create(property_type_title: "Villa", property_type_descr: "Stylish detached residence building.")
PropertyType.create(property_type_title: "Tiny house", property_type_descr: "Minimalist residence building with much smaller square footage than the average home (i.e. 400 square feet and below), built with downsizing and sustainability in mind.")
PropertyType.create(property_type_title: "Tree house", property_type_descr: "Basically, this is a cottage in the tree, suspended above void.")
PropertyType.all.each do |ptype|
  puts "    - Property type ID: #{ptype.id} - Title: #{ptype.property_type_title} - Description: #{ptype.property_type_descr}"
end
puts "  > Finished seeding 'PropertyTypes'"


############################
#                          #
#  CREATION OF PROPERTIES  #
#                          #
###############################
#  id: integer                #
#  title: string              #
#  price: float               #
#  description: text          #
#  property_type_id: integer  #
#  user_id: integer           #
###############################

puts "  > Starts seeding DB with 'Property' objects"
Property.create(title: "Moulinsart", price: 12000000.0, description: "Famous home of Captain Haddock, Tintin, Snowy, and Thompson & Thomson.", property_type_id: 5, user_id: User.all.sample.id)
Property.create(title: "Mortevielle", price: 3000000.0, description: "Main location of the wellknown intrigue game issued by Lankhor on Amstrad CPC 6128 in 1986.", property_type_id: 10, user_id: User.all.sample.id)
Property.create(title: "Melleray", price: 299000.0, description: "Villa with a 5000 square meters landscaped garden.", property_type_id: 11, user_id: User.all.sample.id)
Property.create(title: "GibbZ' Lair", price: 25.90, description: "GibbZ 'home sweet home' offering 4 bedrooms, 1 kitchen, 2 bathrooms, 1 dining, 1 living, and a skate middle-ramp in the garden.", property_type_id: 1, user_id: User.all.sample.id)
Property.create(title: "Loïs' Hideout", price: 9999999, description: "Loïs 'home sweet home' suspended tree house with 2 bedrooms, 1 kitchen, 1 bathroom, 1 dining, 1 living, 1 reading and study room, and an above-canopy lookout balcony.", property_type_id: 13, user_id: User.all.sample.id)
Property.create(title: "Damian' Sky Views", price: 9999999, description: "Damian 'home sweet home' benefitting from 12 double bedrooms, 6 single bedrooms, 4 kitchen (incl. one within the roof-top pool bar), 8 bathrooms, 3 dining, 3 living, a wine / spirit / cigar room, and an armored panic room.", property_type_id: 3, user_id: User.all.sample.id)
Property.all.each do |prop|
  puts "    - Property ID: #{prop.id} - Title: #{prop.title} - Description: #{prop.description} - Type: #{PropertyType.find(prop.property_type_id).property_type_title} - Owner: #{User.find(prop.user_id).email}"
end
puts "  > Finished seeding BD with 'Property' objects"


##################################
#                                #
#  CREATION OF PRIVATE MESSAGES  #
#                                #
##################################
#  id: integer            #
#  title: string          #
#  content: text          #
#  sender_id: integer     #
#  recipient_id: integer  #
###########################

puts "  > Starts seeding DB with 'PrivateMessage' objects"
PrivateMessage.create(content: Faker::Lorem.paragraph(sentence_count: 2, supplemental: true, random_sentences_to_add: 3), 
                      sender_id: ,
                      recipient_id: )

puts "  > Finished seeding DB with 'PrivateMessage' objects"

puts
puts "SEEDING - This is the end... At last !"
puts
puts "Thank you for your patience ;-)"
puts

########################
#                      #
#     REACT ESTATE     #
#  Official seed file  #
#                      #
#  THP Dev Winter 2022 #
#                      #
########################
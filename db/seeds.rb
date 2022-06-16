########################
#                      #
#     REACT ESTATE     #
#  Official seed file  #
#                      #
#  THP Dev Winter 2022 #
#                      #
###########################################################################
#  20220614: JBV - Created SEED file                                      #
#  20220616: JBV - Updated to fill in 'properties.image_url' juste added  #
###########################################################################

# Notice: requires the "faker" and "database_cleaner" gems to be part of your Rails environment (ex. via Gemfile)

# Erase the content of all tables, hence reseting the related "id" counters
DatabaseCleaner.clean_with(:truncation)

###############################
#                             #
#  CREATION OF STANDARD USER  #
#                             #
################################
#  id: integer                 #
#  email: string               #
#  encrypted_password: string  #
################################

# TO DO: At this stage (2002/06/14 02:31 PM), the "User" model solely contains "Devise mandatory fields", i.e. email and (encrypted_)password. 
#        If time allows, would be nice to add "first_name", "last_name", "birthdate", "gender", "photo_url", "role" (0: user, 1: admin)...
puts
puts "SEEDING - Creation of fake users"
puts


puts "  > Starts seeding DB with 'Standard User' objects"
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
  # puts "    - [Full version] User ID: #{User.last.id} - first_name: #{User.last.first_name} - last_name: #{User.last.last_name} - email: #{User.last.email} - password: #{User.last.encrypted_password} - birthdate: #{User.last.birthdate} - role: #{User.last.role}"
  User.create(password: "THP2022", 
              email: "user_react_estate#{xstr}@yopmail.com")
  puts "    - [Limited version] User ID: #{User.last.id} - User mail: #{User.last.email} - User password (encrypted): #{User.last.encrypted_password}"
end
puts "  > Finished seeding DB with 'Standard User' objects"


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
puts "  > Starts seeding DB with the one and only 'Admin'"
# User.create(first_name: "admin", 
            # last_name: "admin", 
            # password: "THP2022", 
            # email: "admin_react_estate@yopmail.com",
            # birthdate: Faker::Date.birthday(min_age: 18, max_age: 100),
            # gender: Faker::Gender.binary_type,
            # photo_url:"photo_admin.jpg",
            # role:1)
# puts "    - [Full version] Admin ID: #{User.last.id} - first_name: #{User.last.first_name} - last_name: #{User.last.last_name} - email: #{User.last.email} - password: #{User.last.encrypted_password} - birthdate: #{User.last.birthdate} - role: #{User.last.role}"
User.create(password: "THP2022",
            email: "admin_react_estate@yopmail.com")
puts "    - [Limited version] Admin ID: #{User.last.id} - Admin mail: #{User.last.email} - Admin password (encrypted): #{User.last.encrypted_password}"
puts "  > Finished seeding DB with the one and only 'Admin'"


################################
#                              #
#  CREATION OF PROPERTY TYPES  #
#                              #
#################################
#  id: integer                  #
#  property_type_title: string  #
#  property_type_desc: text    #
#################################

puts "  > Starts seeding DB with 'PropertyType' objects"
PropertyType.create(property_type_title: "House", property_type_desc: "Detached and self-contained residence building with its own front door onto the street.")
PropertyType.create(property_type_title: "Flat / Appartment", property_type_desc: "self-contained set of rooms within a shared building.")
PropertyType.create(property_type_title: "Penthouse", property_type_desc: "Luxuriously fitted and spaceous flat / apartment on the top floor of a tall modern building")
PropertyType.create(property_type_title: "Loft", property_type_desc: "Spaceous room or flat directly under the roof of a house or other building, converted and used for accommodation.")
PropertyType.create(property_type_title: "Castle", property_type_desc: "Large building, typically of the medieval period, fortified against attack with thick walls, battlements, towers, and in many cases a moat.")
PropertyType.create(property_type_title: "Parking spot", property_type_desc: "Place in a parking lot / car park to park one (motor) vehicule.")
PropertyType.create(property_type_title: "Garage / Closed parking box", property_type_desc: "(Place in a) building for housing motor vehicles.")
PropertyType.create(property_type_title: "Building plot", property_type_desc: "Piece of land on which a house or buidling can be built.")
PropertyType.create(property_type_title: "Warehouse", property_type_desc: "Large building, often made of bricks and/or metal, where great quantities raw materials or manufactured goods may be stored prior to their distribution for sale.")
PropertyType.create(property_type_title: "Manor", property_type_desc: "Large country house with lands, generally haunted if in Scotland.")
PropertyType.create(property_type_title: "Villa", property_type_desc: "Stylish detached residence building.")
PropertyType.create(property_type_title: "Tiny house", property_type_desc: "Minimalist residence building with much smaller square footage than the average home (i.e. 400 square feet and below), built with downsizing and sustainability in mind.")
PropertyType.create(property_type_title: "Tree house", property_type_desc: "Basically, this is a cottage in the tree, suspended above void.")
PropertyType.all.each do |ptype|
  puts "    - Property type ID: #{ptype.id} - Title: #{ptype.property_type_title} - Description: #{ptype.property_type_desc}"
end
puts "  > Finished seeding DB with 'PropertyType' objects"


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
Property.create(title: "Moulinsart", price: 12000000.0, description: "Famous home of Captain Haddock, Tintin, Snowy, and Thompson & Thomson.", property_type_id: 5, user_id: User.all.sample.id, image_url: "1.jpg")
Property.create(title: "Mortevielle", price: 3000000.0, description: "Main location of the wellknown intrigue game issued by Lankhor on Amstrad CPC 6128 in 1986.", property_type_id: 10, user_id: User.all.sample.id, image_url: "2.jpg")
Property.create(title: "Melleray", price: 299000.0, description: "Villa with a 5000 square meters landscaped garden.", property_type_id: 11, user_id: User.all.sample.id)
Property.create(title: "GibbZ' Lair", price: 25.90, description: "GibbZ 'home sweet home' offering 4 bedrooms, 1 kitchen, 2 bathrooms, 1 dining, 1 living, and a skate middle-ramp in the garden.", property_type_id: 1, user_id: User.all.sample.id, image_url: "4.jpg")
Property.create(title: "Loïs' Hideout", price: 9999999, description: "Loïs 'home sweet home' suspended tree house with 2 bedrooms, 1 kitchen, 1 bathroom, 1 dining, 1 living, 1 reading and study room, and an above-canopy lookout balcony.", property_type_id: 13, user_id: User.all.sample.id, image_url: "5.jpg")
Property.create(title: "Damian' Sky Views", price: 9999999, description: "Damian 'home sweet home' benefitting from 12 double bedrooms, 6 single bedrooms, 4 kitchen (incl. one within the roof-top pool bar), 8 bathrooms, 3 dining, 3 living, a wine / spirit / cigar room, and an armored panic room.", property_type_id: 3, user_id: User.all.sample.id, image_url: "6.jpg")
Property.all.each do |prop|
  puts "    - Property ID: #{prop.id} - Title: #{prop.title} - Description: #{prop.description} - Type: #{PropertyType.find(prop.property_type_id).property_type_title} - Owner: #{User.find(prop.user_id).email} - Image: #{prop.image_url}"
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
PrivateMessage.create(content: Faker::Lorem.paragraph(sentence_count: 2, supplemental: true, random_sentences_to_add: 2), 
                      sender_id: 1,
                      recipient_id: 2)
PrivateMessage.create(content: Faker::Lorem.paragraph(sentence_count: 2, supplemental: true, random_sentences_to_add: 2), 
                      sender_id: 1,
                      recipient_id: 3)
PrivateMessage.create(content: Faker::Lorem.paragraph(sentence_count: 2, supplemental: true, random_sentences_to_add: 2), 
                      sender_id: 1,
                      recipient_id: 4)
PrivateMessage.create(content: Faker::Lorem.paragraph(sentence_count: 2, supplemental: true, random_sentences_to_add: 2), 
                      sender_id: 1,
                      recipient_id: 5)
PrivateMessage.create(content: Faker::Lorem.paragraph(sentence_count: 2, supplemental: true, random_sentences_to_add: 2), 
                      sender_id: 1,
                      recipient_id: 2)
PrivateMessage.create(content: Faker::Lorem.paragraph(sentence_count: 2, supplemental: true, random_sentences_to_add: 2), 
                      sender_id: 2,
                      recipient_id: 3)
PrivateMessage.create(content: Faker::Lorem.paragraph(sentence_count: 2, supplemental: true, random_sentences_to_add: 2), 
                      sender_id: 2,
                      recipient_id: 1)
PrivateMessage.create(content: Faker::Lorem.paragraph(sentence_count: 2, supplemental: true, random_sentences_to_add: 2), 
                      sender_id: 2,
                      recipient_id: 4)
PrivateMessage.create(content: Faker::Lorem.paragraph(sentence_count: 2, supplemental: true, random_sentences_to_add: 2), 
                      sender_id: 2,
                      recipient_id: 5)
PrivateMessage.create(content: Faker::Lorem.paragraph(sentence_count: 2, supplemental: true, random_sentences_to_add: 2), 
                      sender_id: 3,
                      recipient_id: 1)
PrivateMessage.all.each do |pm|
  puts "    - Message ID: #{pm.id} - Title: #{pm.title} - Content: #{pm.content} - Sender: #{User.find(pm.sender_id).email} - Recipient: #{User.find(pm.recipient_id).email}"
end
puts "  > Finished seeding DB with 'PrivateMessage' objects"


################################
#                              #
#  CREATION OF RECOMMENDATION  #
#                              #
################################
#  id: integer            #
#  content: text          #
#  author_id: integer     #
#  target_id: integer     #
###########################

puts "  > Starts seeding DB with 'Recommendation' objects"
Recommendation.create(content: "The most seamless transaction ever: thanks!", author_id: 1, target_id: 8)
Recommendation.create(content: "What a f***ing estate investor: this dumb*** simply stole all my money!", author_id: 1, target_id: 7)
Recommendation.create(content: "Easy transaction. Smooth exchanges. Good price. Thank you.", author_id: 2, target_id: 7)
Recommendation.create(content: "Will gladly make business with you again! See you and thank you!", author_id: 3, target_id: 6)
Recommendation.create(content: "Transaction was long, as was negociation but we finally came to an agreement. Thank you.", author_id: 4, target_id: 5)
Recommendation.create(content: "I loooove to rip off ol' grand'mas! Thank you granny for selling me your castle for just a few bucks! Ha! Ha! Ha! (Machiavellian laugh)", author_id: 5, target_id: 4)
Recommendation.create(content: "4th transaction I make on REACT ESTATE platform. Cannot be smoother. Thanks to the Mr. X, seller of this luxurious villa!", author_id: 6, target_id: 3)
Recommendation.create(content: "The most seamless transaction ever: thank you Mrs. Y.", author_id: 7, target_id: 2)
Recommendation.create(content: "Am so glad I bought this flat", author_id: 8, target_id: 2)
Recommendation.create(content: "Transaction satisfactory.", author_id: 8, target_id: 1)
Recommendation.all.each do |reco|
  puts "    - Recommendation ID: #{reco.id} - Content: #{reco.content} - Author: #{User.find(reco.author_id).email} - Target: #{User.find(reco.target_id).email}"
end
puts "  > Finished seeding DB with 'Recommendation' objects"


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
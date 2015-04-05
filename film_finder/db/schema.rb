# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 0) do

  create_table "scenes", force: :cascade do |t|
    t.string "film",         limit: 255
    t.string "year",         limit: 255
    t.string "director",     limit: 255
    t.string "director_imdb", limit: 255
    t.float  "latitude",     limit: 24
    t.float  "longitude",    limit: 24
    t.string "borough",      limit: 255
    t.string "neighborhood", limit: 255
    t.string "scenetype",    limit: 255
    t.string "media",        limit: 255
    t.string "imdb",         limit: 255
    t.string "client_loc",    limit: 255
  end

end

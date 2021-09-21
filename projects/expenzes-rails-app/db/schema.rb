# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_05_22_134534) do

  create_table "account_types", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name"
    t.string "slug"
    t.datetime "created_at", precision: 6
    t.datetime "updated_at", precision: 6
    t.index ["name"], name: "index_account_types_on_name", unique: true
    t.index ["slug"], name: "index_account_types_on_slug", unique: true
  end

  create_table "accounts", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name"
    t.string "slug"
    t.bigint "account_type_id", null: false
    t.decimal "amount", precision: 20, scale: 2
    t.datetime "created_at", precision: 6
    t.datetime "updated_at", precision: 6
    t.boolean "is_frequent"
    t.boolean "is_snapshot_disable"
    t.boolean "is_closed", default: false
    t.index ["account_type_id"], name: "index_accounts_on_account_type_id"
    t.index ["name"], name: "index_accounts_on_name", unique: true
    t.index ["slug"], name: "index_accounts_on_slug", unique: true
  end

  create_table "activities", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "from_account_id"
    t.bigint "to_account_id"
    t.bigint "tag_id", null: false
    t.decimal "amount", precision: 20, scale: 2
    t.date "event_date"
    t.text "remarks"
    t.bigint "transaction_type_id", null: false
    t.datetime "created_at", precision: 6
    t.datetime "updated_at", precision: 6
    t.index ["from_account_id"], name: "index_activities_on_from_account_id"
    t.index ["tag_id"], name: "index_activities_on_tag_id"
    t.index ["to_account_id"], name: "index_activities_on_to_account_id"
    t.index ["transaction_type_id"], name: "index_activities_on_transaction_type_id"
  end

  create_table "passbooks", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "account_id", null: false
    t.bigint "activity_id"
    t.decimal "previous_balance", precision: 20, scale: 2
    t.bigint "transaction_type_id", null: false
    t.decimal "balance", precision: 20, scale: 2
    t.datetime "created_at", precision: 6
    t.datetime "updated_at", precision: 6
    t.index ["account_id"], name: "index_passbooks_on_account_id"
    t.index ["activity_id"], name: "index_passbooks_on_activity_id"
    t.index ["transaction_type_id"], name: "index_passbooks_on_transaction_type_id"
  end

  create_table "snapshots", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.decimal "saving", precision: 20, scale: 2
    t.decimal "credit", precision: 20, scale: 2
    t.decimal "loan", precision: 20, scale: 2
    t.decimal "invest", precision: 20, scale: 2
    t.decimal "deposit", precision: 20, scale: 2
    t.decimal "donate", precision: 20, scale: 2
    t.decimal "wallet", precision: 20, scale: 2
    t.date "event_date"
    t.datetime "created_at", precision: 6
    t.datetime "updated_at", precision: 6
  end

  create_table "tags", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name"
    t.string "slug"
    t.bigint "transaction_type_id", null: false
    t.datetime "created_at", precision: 6
    t.datetime "updated_at", precision: 6
    t.bigint "tag_id"
    t.index ["name"], name: "index_tags_on_name", unique: true
    t.index ["slug"], name: "index_tags_on_slug", unique: true
    t.index ["tag_id"], name: "index_tags_on_tag_id"
    t.index ["transaction_type_id"], name: "index_tags_on_transaction_type_id"
  end

  create_table "transaction_types", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name"
    t.string "slug"
    t.datetime "created_at", precision: 6
    t.datetime "updated_at", precision: 6
    t.index ["name"], name: "index_transaction_types_on_name", unique: true
    t.index ["slug"], name: "index_transaction_types_on_slug", unique: true
  end

  add_foreign_key "accounts", "account_types"
  add_foreign_key "activities", "accounts", column: "from_account_id"
  add_foreign_key "activities", "accounts", column: "to_account_id"
  add_foreign_key "activities", "tags"
  add_foreign_key "activities", "transaction_types"
  add_foreign_key "passbooks", "accounts"
  add_foreign_key "passbooks", "transaction_types"
  add_foreign_key "tags", "tags"
  add_foreign_key "tags", "transaction_types"
end

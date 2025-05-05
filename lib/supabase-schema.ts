// This file is for reference only - it shows the Supabase schema structure

/*
Table: community_messages
- id: uuid (primary key)
- content: text
- user_id: uuid (references auth.users.id)
- room_id: text
- created_at: timestamp with time zone

Table: community_members
- id: uuid (primary key)
- user_id: uuid (references auth.users.id)
- industry_id: text
- joined_at: timestamp with time zone

Table: industries
- id: text (primary key)
- name: text
- description: text
- image_url: text
*/

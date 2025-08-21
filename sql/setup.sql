-- Create lifeexperiences table
CREATE TABLE lifeexperiences (
    id BIGSERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    date DATE NOT NULL,
    target_date DATE,
    category TEXT NOT NULL,
    description TEXT NOT NULL,
    rating INTEGER CHECK (rating >= 1 AND rating <= 10),
    image_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create bucket_list table
CREATE TABLE bucket_list (
    id BIGSERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    priority TEXT CHECK (priority IN ('high', 'medium', 'low')),
    completed BOOLEAN DEFAULT FALSE,
    created_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    completed_date TIMESTAMP WITH TIME ZONE
);

-- Enable Row Level Security (optional)
ALTER TABLE lifeexperiences ENABLE ROW LEVEL SECURITY;
ALTER TABLE bucket_list ENABLE ROW LEVEL SECURITY;

-- Create policies (allow all operations for now - adjust as needed)
CREATE POLICY "Allow all operations on lifeexperiences" ON lifeexperiences FOR ALL USING (true);
CREATE POLICY "Allow all operations on bucket_list" ON bucket_list FOR ALL USING (true);
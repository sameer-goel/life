// Supabase configuration is loaded from config.js

// Database operations
const db = {
    // Experiences
    async getExperiences() {
        if (!supabase) {
            throw new Error('Supabase client not initialized');
        }
        const { data, error } = await supabase
            .from('lifeexperiences')
            .select('*')
            .order('date', { ascending: false });
        if (error) throw error;
        return data || [];
    },

    async addExperience(experience) {
        if (!supabase) {
            throw new Error('Supabase client not initialized');
        }
        const { data, error } = await supabase
            .from('lifeexperiences')
            .insert([experience])
            .select();
        if (error) throw error;
        return data[0];
    },

    async updateExperience(id, experience) {
        if (!supabase) {
            throw new Error('Supabase client not initialized');
        }
        const { data, error } = await supabase
            .from('lifeexperiences')
            .update(experience)
            .eq('id', id)
            .select();
        if (error) throw error;
        return data[0];
    },

    async deleteExperience(id) {
        if (!supabase) {
            throw new Error('Supabase client not initialized');
        }
        const { error } = await supabase
            .from('lifeexperiences')
            .delete()
            .eq('id', id);
        if (error) throw error;
    },

    // Bucket List
    async getBucketList() {
        if (!supabase) {
            throw new Error('Supabase client not initialized');
        }
        const { data, error } = await supabase
            .from('bucket_list')
            .select('*')
            .order('created_date', { ascending: false });
        if (error) throw error;
        return data || [];
    },

    async addBucketItem(item) {
        if (!supabase) {
            throw new Error('Supabase client not initialized');
        }
        const { data, error } = await supabase
            .from('bucket_list')
            .insert([item])
            .select();
        if (error) throw error;
        return data[0];
    },

    async updateBucketItem(id, updates) {
        if (!supabase) {
            throw new Error('Supabase client not initialized');
        }
        const { data, error } = await supabase
            .from('bucket_list')
            .update(updates)
            .eq('id', id)
            .select();
        if (error) throw error;
        return data[0];
    },

    async deleteBucketItem(id) {
        if (!supabase) {
            throw new Error('Supabase client not initialized');
        }
        const { error } = await supabase
            .from('bucket_list')
            .delete()
            .eq('id', id);
        if (error) throw error;
    }
};
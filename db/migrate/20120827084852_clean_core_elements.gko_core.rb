# This migration comes from gko_core (originally 20120825130500)
class CleanCoreElements < ActiveRecord::Migration
  def up
      drop_table :element_texts if table_exists?(:element_texts)
      drop_table :element_assignments if table_exists?(:element_assignments)
      drop_table :element_text_translations if table_exists?(:element_text_translations)
      pref_keys = ['column_count', 'default_order', 'listing_description_length', 'listing_omission', 'children_thumb_size']

      Site.all.each do |site|
        site.sections.all.each do |m|
          pref_keys.each do |k|
            if p = Preference.find_by_key("#{m.class.name.underscore}/#{k}/#{m.id}")
              m[k] = p.value
              p.destroy
            end
          end
          m.save!
          m.clear_preferences
        end
      end
    end
end


ProductsController.class_eval do
  
  def collection
    @nails =  site.categories.find_by_name("nails")  
    @products || begin
      c = end_of_association_chain.available.categorized(@nails.id).with_globalize
      c = filter_collection(c)
      c = search_all(c) if searching?
      c = order_all(c) if ordering? 
      if Gko::Store::Config[:list_all_variants]
        product_ids = c.all.map(&:id)
        c = Variant.active.includes([:option_values, :images]).where(:product_id => product_ids)
      end
      c = paginate_all(c)
      set_collection_ivar(c)
    end
  end
  
end
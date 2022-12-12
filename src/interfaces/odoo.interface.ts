// Generated by https://quicktype.io

export interface LoginOdoo {
    jsonrpc: string;
    method:  string;
    params:  Params;
}

export interface Params {
    service: string;
    method:  string;
    args:    string[];
}

// Generated by https://quicktype.io
// Generated by https://quicktype.io

// Generated by https://quicktype.io

export interface ResSearchRead {
    jsonrpc: string;
    id:      null;
    result:  Result[];
}

export interface Result {
    id:                                         number;
    image_1920:                                 boolean;
    image_1024:                                 boolean;
    image_512:                                  boolean;
    image_256:                                  boolean;
    image_128:                                  boolean;
    activity_ids:                               any[];
    activity_state:                             boolean;
    activity_user_id:                           boolean;
    activity_type_id:                           boolean;
    activity_type_icon:                         boolean;
    activity_date_deadline:                     boolean;
    my_activity_date_deadline:                  boolean;
    activity_summary:                           boolean;
    activity_exception_decoration:              boolean;
    activity_exception_icon:                    boolean;
    activity_calendar_event_id:                 boolean;
    message_is_follower:                        boolean;
    message_follower_ids:                       any[];
    message_partner_ids:                        any[];
    message_ids:                                any[];
    has_message:                                boolean;
    message_unread:                             boolean;
    message_unread_counter:                     number;
    message_needaction:                         boolean;
    message_needaction_counter:                 number;
    message_has_error:                          boolean;
    message_has_error_counter:                  number;
    message_attachment_count:                   number;
    message_main_attachment_id:                 boolean;
    website_message_ids:                        any[];
    message_has_sms_error:                      boolean;
    name:                                       string;
    sequence:                                   number;
    description:                                string;
    description_purchase:                       boolean;
    description_sale:                           boolean;
    detailed_type:                              string;
    type:                                       string;
    categ_id:                                   Array<number | string>;
    currency_id:                                Array<number | string>;
    cost_currency_id:                           Array<number | string>;
    list_price:                                 number;
    standard_price:                             number;
    volume:                                     number;
    volume_uom_name:                            string;
    weight:                                     number;
    weight_uom_name:                            string;
    sale_ok:                                    boolean;
    purchase_ok:                                boolean;
    uom_id:                                     Array<number | string>;
    uom_name:                                   string;
    uom_po_id:                                  Array<number | string>;
    company_id:                                 boolean;
    packaging_ids:                              any[];
    seller_ids:                                 number[];
    variant_seller_ids:                         number[];
    active:                                     boolean;
    color:                                      number;
    is_product_variant:                         boolean;
    attribute_line_ids:                         any[];
    valid_product_template_attribute_line_ids:  any[];
    product_variant_ids:                        number[];
    product_variant_id:                         Array<number | string>;
    product_variant_count:                      number;
    barcode:                                    boolean;
    default_code:                               boolean;
    pricelist_item_count:                       number;
    can_image_1024_be_zoomed:                   boolean;
    has_configurable_attributes:                boolean;
    product_tooltip:                            string;
    priority:                                   string;
    product_tag_ids:                            any[];
    __last_update:                              string;
    display_name:                               string;
    create_uid:                                 Array<number | string>;
    create_date:                                string;
    write_uid:                                  Array<number | string>;
    write_date:                                 string;
    taxes_id:                                   any[];
    tax_string:                                 string;
    supplier_taxes_id:                          any[];
    property_account_income_id:                 boolean;
    property_account_expense_id:                boolean;
    account_tag_ids:                            any[];
    responsible_id:                             Array<number | string>;
    property_stock_production:                  Array<number | string>;
    property_stock_inventory:                   Array<number | string>;
    sale_delay:                                 number;
    tracking:                                   string;
    description_picking:                        boolean;
    description_pickingout:                     boolean;
    description_pickingin:                      boolean;
    qty_available:                              number;
    virtual_available:                          number;
    incoming_qty:                               number;
    outgoing_qty:                               number;
    location_id:                                boolean;
    warehouse_id:                               boolean;
    has_available_route_ids:                    boolean;
    route_ids:                                  number[];
    nbr_moves_in:                               number;
    nbr_moves_out:                              number;
    nbr_reordering_rules:                       number;
    reordering_min_qty:                         number;
    reordering_max_qty:                         number;
    route_from_categ_ids:                       any[];
    show_on_hand_qty_status_button:             boolean;
    show_forecasted_qty_status_button:          boolean;
    unspsc_code_id:                             boolean;
    property_account_creditor_price_difference: boolean;
    purchased_product_qty:                      number;
    purchase_method:                            string;
    purchase_line_warn:                         string;
    purchase_line_warn_msg:                     boolean;
    cost_method:                                string;
    valuation:                                  string;
    available_in_pos:                           boolean;
    to_weight:                                  boolean;
    pos_categ_id:                               Array<number | string>;
    service_type:                               string;
    sale_line_warn:                             string;
    sale_line_warn_msg:                         boolean;
    expense_policy:                             string;
    visible_expense_policy:                     boolean;
    sales_count:                                number;
    visible_qty_configurator:                   boolean;
    invoice_policy:                             string;
    service_to_purchase:                        boolean;
}

// Generated by https://quicktype.io

export interface ResLocations {
    jsonrpc: string;
    id:      null;
    result:  ResultLocation[];
}

export interface ResultLocation {
    id:                            number;
    product_id:                    Array<number | string>;
    product_tmpl_id:               Array<number | string>;
    product_uom_id:                Array<number | string>;
    priority:                      string;
    company_id:                    boolean;
    location_id:                   Array<number | string>;
    storage_category_id:           boolean;
    cyclic_inventory_frequency:    number;
    lot_id:                        boolean;
    sn_duplicated:                 boolean;
    package_id:                    boolean;
    owner_id:                      boolean;
    quantity:                      number;
    reserved_quantity:             number;
    available_quantity:            number;
    in_date:                       string;
    tracking:                      string;
    on_hand:                       boolean;
    product_categ_id:              Array<number | string>;
    inventory_quantity:            number;
    inventory_quantity_auto_apply: number;
    inventory_diff_quantity:       number;
    inventory_date:                boolean;
    last_count_date:               boolean;
    inventory_quantity_set:        boolean;
    is_outdated:                   boolean;
    user_id:                       boolean;
    __last_update:                 string;
    display_name:                  string;
    create_uid:                    Array<number | string>;
    create_date:                   string;
    write_uid:                     Array<number | string>;
    write_date:                    string;
    value:                         number;
    currency_id:                   boolean;
    accounting_date:               boolean;
}

// Generated by https://quicktype.io

export interface ResLogin {
    jsonrpc: string;
    id:      null;
    result:  boolean;
}

// Generated by https://quicktype.io

export interface ResAllProducts {
    jsonrpc: string;
    id:      null;
    result:  Result[];
}

export interface Result {
    id:            number;
    name:          string;
    list_price:    number;
    qty_available: number;
}

// Generated by https://quicktype.io

export interface ResWarehouse {
    jsonrpc: string;
    id:      null;
    result:  ResultW[];
}

export interface ResultW {
    id:          number;
    product_id:  Array<number | string>;
    location_id: Array<number | string>;
    quantity:    number;
}





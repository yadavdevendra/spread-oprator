export const profileData = {
    data: [
      {
        _id: {
          $oid: "6360c7a8a4e3ac53cf524b7a"
        },
        name: "test",
        query: "",
        queryArray: [
          [
            {
              attribute: "",
              condition: "",
              value: ""
            }
          ]
        ],
        manual_product_ids: ["7906616148201", "7906615656681"],
        category_id: {
          primary_category: "book",
          sub_category: "bookloader",
          browser_node_id: "1318145031",
          barcode_exemption: false,
          displayPath: [
            "Books",
            "Language, Linguistics & Writing",
            "Dictionaries"
          ],
          parentNodes: ["976389031", "976390031", "1318144031", "1318145031"],
          type: ""
        },
        overWriteExistingProducts: false,
        data: [
          {
            data_type: "pricing_settings",
            title: "test_pricing_template",
            data: {
              data_type: "price_settings",
              settings_enabled: true,
              settings_selected: {
                sale_price: false,
                business_price: false,
                minimum_price: false
              },
              standard_price: {
                attribute: "default",
                value: ""
              },
              sale_price: {
                attribute: "default",
                value: "",
                start_date: "",
                end_date: ""
              },
              business_price: {
                attribute: "default",
                value: ""
              },
              minimum_price: {
                attribute: "default",
                value: ""
              }
            }
          },
          {
            data_type: "inventory_settings",
            title: "test_inventory_template",
            data: {
              data_type: "inventory_settings",
              settings_enabled: true,
              settings_selected: {
                max_inventory_level: false,
                fixed_inventory: false,
                threshold_inventory: false,
                delete_out_of_stock: false,
                reserved_inventory: false,
                inventory_fulfillment_latency: true,
                warehouses_settings: true,
                customize_inventory: false
              },
              enable_max_inventory_level: true,
              max_inventory_level: "999",
              fixed_inventory: "",
              threshold_inventory: "",
              reserved_inventory: "",
              warehouses_settings: ["71247167721"],
              inventory_fulfillment_latency: "4",
              customize_inventory: {
                attribute: "default",
                value: ""
              }
            }
          },
          {
            data_type: "product_settings",
            title: "test_product_template",
            data: {
              data_type: "product_settings",
              settings_enabled: true,
              images: false,
              product_details: false,
              selected_attributes: [],
              sync_status_with: {
                sku: false,
                barcode: false
              }
            }
          }
        ],
        attributes_mapping: {
          required_attribute: [
            {
              amazon_attribute: "binding",
              shopify_attribute: "",
              recommendation: "bath book",
              custom_text: "",
              shopify_select: "recommendation"
            },
            {
              amazon_attribute: "manufacturer",
              shopify_attribute: "product_type",
              recommendation: "",
              custom_text: "",
              shopify_select: "Search"
            },
            {
              amazon_attribute: "author1",
              shopify_attribute: "type",
              recommendation: "",
              custom_text: "",
              shopify_select: "Search"
            },
            {
              amazon_attribute: "publication_date",
              shopify_attribute: "type",
              recommendation: "",
              custom_text: "",
              shopify_select: "Search"
            },
            {
              amazon_attribute: "language_published",
              shopify_attribute: "",
              recommendation: "Scandinavian",
              custom_text: "",
              shopify_select: "recommendation"
            },
            {
              amazon_attribute: "country_of_origin",
              shopify_attribute: "",
              recommendation: "China",
              custom_text: "",
              shopify_select: "recommendation"
            },
            {
              amazon_attribute: "external_product_information",
              shopify_attribute: "description",
              recommendation: "",
              custom_text: "",
              shopify_select: "Search"
            },
            {
              amazon_attribute: "maximum_retail_price",
              shopify_attribute: "product_type",
              recommendation: "",
              custom_text: "",
              shopify_select: "Search"
            }
          ],
          optional_attribute: [],
          _id: {
            $oid: "6360c7a8a4e3ac53cf524b75"
          }
        },
        targets: [
          {
            target_marketplace: "amazon",
            skip_query: "",
            category_id: {
              primary_category: "book",
              sub_category: "bookloader",
              browser_node_id: "1318145031",
              barcode_exemption: false,
              displayPath: [
                "Books",
                "Language, Linguistics & Writing",
                "Dictionaries"
              ],
              parentNodes: ["976389031", "976390031", "1318144031", "1318145031"],
              type: ""
            },
            data: [
              {
                data_type: "pricing_settings",
                title: "test_pricing_template",
                data: {
                  data_type: "price_settings",
                  settings_enabled: true,
                  settings_selected: {
                    sale_price: false,
                    business_price: false,
                    minimum_price: false
                  },
                  standard_price: {
                    attribute: "default",
                    value: ""
                  },
                  sale_price: {
                    attribute: "default",
                    value: "",
                    start_date: "",
                    end_date: ""
                  },
                  business_price: {
                    attribute: "default",
                    value: ""
                  },
                  minimum_price: {
                    attribute: "default",
                    value: ""
                  }
                }
              },
              {
                data_type: "inventory_settings",
                title: "test_inventory_template",
                data: {
                  data_type: "inventory_settings",
                  settings_enabled: true,
                  settings_selected: {
                    max_inventory_level: false,
                    fixed_inventory: false,
                    threshold_inventory: false,
                    delete_out_of_stock: false,
                    reserved_inventory: false,
                    inventory_fulfillment_latency: true,
                    warehouses_settings: true,
                    customize_inventory: false
                  },
                  enable_max_inventory_level: true,
                  max_inventory_level: "999",
                  fixed_inventory: "",
                  threshold_inventory: "",
                  reserved_inventory: "",
                  warehouses_settings: ["71247167721"],
                  inventory_fulfillment_latency: "4",
                  customize_inventory: {
                    attribute: "default",
                    value: ""
                  }
                }
              },
              {
                data_type: "product_settings",
                title: "test_product_template",
                data: {
                  data_type: "product_settings",
                  settings_enabled: true,
                  images: false,
                  product_details: false,
                  selected_attributes: [],
                  sync_status_with: {
                    sku: false,
                    barcode: false
                  }
                }
              }
            ],
            attributes_mapping: {
              required_attribute: [
                {
                  amazon_attribute: "binding",
                  shopify_attribute: "",
                  recommendation: "bath book",
                  custom_text: "",
                  shopify_select: "recommendation"
                },
                {
                  amazon_attribute: "manufacturer",
                  shopify_attribute: "product_type",
                  recommendation: "",
                  custom_text: "",
                  shopify_select: "Search"
                },
                {
                  amazon_attribute: "author1",
                  shopify_attribute: "type",
                  recommendation: "",
                  custom_text: "",
                  shopify_select: "Search"
                },
                {
                  amazon_attribute: "publication_date",
                  shopify_attribute: "type",
                  recommendation: "",
                  custom_text: "",
                  shopify_select: "Search"
                },
                {
                  amazon_attribute: "language_published",
                  shopify_attribute: "",
                  recommendation: "Scandinavian",
                  custom_text: "",
                  shopify_select: "recommendation"
                },
                {
                  amazon_attribute: "country_of_origin",
                  shopify_attribute: "",
                  recommendation: "China",
                  custom_text: "",
                  shopify_select: "recommendation"
                },
                {
                  amazon_attribute: "external_product_information",
                  shopify_attribute: "description",
                  recommendation: "",
                  custom_text: "",
                  shopify_select: "Search"
                },
                {
                  amazon_attribute: "maximum_retail_price",
                  shopify_attribute: "product_type",
                  recommendation: "",
                  custom_text: "",
                  shopify_select: "Search"
                }
              ],
              optional_attribute: [],
              _id: {
                $oid: "6360c7a8a4e3ac53cf524b75"
              }
            },
            shops: [
              {
                _id: {
                  $oid: "6360c7a8a4e3ac53cf524b79"
                },
                shop_id: "530",
                active: 1,
                warehouses: [
                  {
                    _id: {
                      $oid: "6360c7a8a4e3ac53cf524b78"
                    },
                    warehouse_id: "*warehouse_id",
                    active: 1,
                    data: [
                      {
                        data_type: "pricing_settings",
                        title: "test_pricing_template",
                        data: {
                          data_type: "price_settings",
                          settings_enabled: true,
                          settings_selected: {
                            sale_price: false,
                            business_price: false,
                            minimum_price: false
                          },
                          standard_price: {
                            attribute: "default",
                            value: ""
                          },
                          sale_price: {
                            attribute: "default",
                            value: "",
                            start_date: "",
                            end_date: ""
                          },
                          business_price: {
                            attribute: "default",
                            value: ""
                          },
                          minimum_price: {
                            attribute: "default",
                            value: ""
                          }
                        }
                      },
                      {
                        data_type: "inventory_settings",
                        title: "test_inventory_template",
                        data: {
                          data_type: "inventory_settings",
                          settings_enabled: true,
                          settings_selected: {
                            max_inventory_level: false,
                            fixed_inventory: false,
                            threshold_inventory: false,
                            delete_out_of_stock: false,
                            reserved_inventory: false,
                            inventory_fulfillment_latency: true,
                            warehouses_settings: true,
                            customize_inventory: false
                          },
                          enable_max_inventory_level: true,
                          max_inventory_level: "999",
                          fixed_inventory: "",
                          threshold_inventory: "",
                          reserved_inventory: "",
                          warehouses_settings: ["71247167721"],
                          inventory_fulfillment_latency: "4",
                          customize_inventory: {
                            attribute: "default",
                            value: ""
                          }
                        }
                      },
                      {
                        data_type: "product_settings",
                        title: "test_product_template",
                        data: {
                          data_type: "product_settings",
                          settings_enabled: true,
                          images: false,
                          product_details: false,
                          selected_attributes: [],
                          sync_status_with: {
                            sku: false,
                            barcode: false
                          }
                        }
                      }
                    ],
                    attributes_mapping: {
                      required_attribute: [
                        {
                          amazon_attribute: "binding",
                          shopify_attribute: "",
                          recommendation: "bath book",
                          custom_text: "",
                          shopify_select: "recommendation"
                        },
                        {
                          amazon_attribute: "manufacturer",
                          shopify_attribute: "product_type",
                          recommendation: "",
                          custom_text: "",
                          shopify_select: "Search"
                        },
                        {
                          amazon_attribute: "author1",
                          shopify_attribute: "type",
                          recommendation: "",
                          custom_text: "",
                          shopify_select: "Search"
                        },
                        {
                          amazon_attribute: "publication_date",
                          shopify_attribute: "type",
                          recommendation: "",
                          custom_text: "",
                          shopify_select: "Search"
                        },
                        {
                          amazon_attribute: "language_published",
                          shopify_attribute: "",
                          recommendation: "Scandinavian",
                          custom_text: "",
                          shopify_select: "recommendation"
                        },
                        {
                          amazon_attribute: "country_of_origin",
                          shopify_attribute: "",
                          recommendation: "China",
                          custom_text: "",
                          shopify_select: "recommendation"
                        },
                        {
                          amazon_attribute: "external_product_information",
                          shopify_attribute: "description",
                          recommendation: "",
                          custom_text: "",
                          shopify_select: "Search"
                        },
                        {
                          amazon_attribute: "maximum_retail_price",
                          shopify_attribute: "product_type",
                          recommendation: "",
                          custom_text: "",
                          shopify_select: "Search"
                        }
                      ],
                      optional_attribute: [],
                      _id: {
                        $oid: "6360c7a8a4e3ac53cf524b75"
                      }
                    },
                    sources: [
                      {
                        source_marketplace: "shopify",
                        data: [
                          {
                            data_type: "pricing_settings",
                            title: "test_pricing_template",
                            data: {
                              data_type: "price_settings",
                              settings_enabled: true,
                              settings_selected: {
                                sale_price: false,
                                business_price: false,
                                minimum_price: false
                              },
                              standard_price: {
                                attribute: "default",
                                value: ""
                              },
                              sale_price: {
                                attribute: "default",
                                value: "",
                                start_date: "",
                                end_date: ""
                              },
                              business_price: {
                                attribute: "default",
                                value: ""
                              },
                              minimum_price: {
                                attribute: "default",
                                value: ""
                              }
                            }
                          },
                          {
                            data_type: "inventory_settings",
                            title: "test_inventory_template",
                            data: {
                              data_type: "inventory_settings",
                              settings_enabled: true,
                              settings_selected: {
                                max_inventory_level: false,
                                fixed_inventory: false,
                                threshold_inventory: false,
                                delete_out_of_stock: false,
                                reserved_inventory: false,
                                inventory_fulfillment_latency: true,
                                warehouses_settings: true,
                                customize_inventory: false
                              },
                              enable_max_inventory_level: true,
                              max_inventory_level: "999",
                              fixed_inventory: "",
                              threshold_inventory: "",
                              reserved_inventory: "",
                              warehouses_settings: ["71247167721"],
                              inventory_fulfillment_latency: "4",
                              customize_inventory: {
                                attribute: "default",
                                value: ""
                              }
                            }
                          },
                          {
                            data_type: "product_settings",
                            title: "test_product_template",
                            data: {
                              data_type: "product_settings",
                              settings_enabled: true,
                              images: false,
                              product_details: false,
                              selected_attributes: [],
                              sync_status_with: {
                                sku: false,
                                barcode: false
                              }
                            }
                          }
                        ],
                        attributes_mapping: {
                          required_attribute: [
                            {
                              amazon_attribute: "binding",
                              shopify_attribute: "",
                              recommendation: "bath book",
                              custom_text: "",
                              shopify_select: "recommendation"
                            },
                            {
                              amazon_attribute: "manufacturer",
                              shopify_attribute: "product_type",
                              recommendation: "",
                              custom_text: "",
                              shopify_select: "Search"
                            },
                            {
                              amazon_attribute: "author1",
                              shopify_attribute: "type",
                              recommendation: "",
                              custom_text: "",
                              shopify_select: "Search"
                            },
                            {
                              amazon_attribute: "publication_date",
                              shopify_attribute: "type",
                              recommendation: "",
                              custom_text: "",
                              shopify_select: "Search"
                            },
                            {
                              amazon_attribute: "language_published",
                              shopify_attribute: "",
                              recommendation: "Scandinavian",
                              custom_text: "",
                              shopify_select: "recommendation"
                            },
                            {
                              amazon_attribute: "country_of_origin",
                              shopify_attribute: "",
                              recommendation: "China",
                              custom_text: "",
                              shopify_select: "recommendation"
                            },
                            {
                              amazon_attribute: "external_product_information",
                              shopify_attribute: "description",
                              recommendation: "",
                              custom_text: "",
                              shopify_select: "Search"
                            },
                            {
                              amazon_attribute: "maximum_retail_price",
                              shopify_attribute: "product_type",
                              recommendation: "",
                              custom_text: "",
                              shopify_select: "Search"
                            }
                          ],
                          optional_attribute: [],
                          _id: {
                            $oid: "6360c7a8a4e3ac53cf524b75"
                          }
                        },
                        shops: [
                          {
                            _id: {
                              $oid: "6360c7a8a4e3ac53cf524b77"
                            },
                            shop_id: "500",
                            active: 1,
                            warehouses: [
                              {
                                _id: {
                                  $oid: "6360c7a8a4e3ac53cf524b76"
                                },
                                warehouse_id: "*warehouse_id",
                                active: 1,
                                Rule: "Not decided yet",
                                data: [
                                  {
                                    data_type: "pricing_settings",
                                    title: "test_pricing_template",
                                    data: {
                                      data_type: "price_settings",
                                      settings_enabled: true,
                                      settings_selected: {
                                        sale_price: false,
                                        business_price: false,
                                        minimum_price: false
                                      },
                                      standard_price: {
                                        attribute: "default",
                                        value: ""
                                      },
                                      sale_price: {
                                        attribute: "default",
                                        value: "",
                                        start_date: "",
                                        end_date: ""
                                      },
                                      business_price: {
                                        attribute: "default",
                                        value: ""
                                      },
                                      minimum_price: {
                                        attribute: "default",
                                        value: ""
                                      }
                                    }
                                  },
                                  {
                                    data_type: "inventory_settings",
                                    title: "test_inventory_template",
                                    data: {
                                      data_type: "inventory_settings",
                                      settings_enabled: true,
                                      settings_selected: {
                                        max_inventory_level: false,
                                        fixed_inventory: false,
                                        threshold_inventory: false,
                                        delete_out_of_stock: false,
                                        reserved_inventory: false,
                                        inventory_fulfillment_latency: true,
                                        warehouses_settings: true,
                                        customize_inventory: false
                                      },
                                      enable_max_inventory_level: true,
                                      max_inventory_level: "999",
                                      fixed_inventory: "",
                                      threshold_inventory: "",
                                      reserved_inventory: "",
                                      warehouses_settings: ["71247167721"],
                                      inventory_fulfillment_latency: "4",
                                      customize_inventory: {
                                        attribute: "default",
                                        value: ""
                                      }
                                    }
                                  },
                                  {
                                    data_type: "product_settings",
                                    title: "test_product_template",
                                    data: {
                                      data_type: "product_settings",
                                      settings_enabled: true,
                                      images: false,
                                      product_details: false,
                                      selected_attributes: [],
                                      sync_status_with: {
                                        sku: false,
                                        barcode: false
                                      }
                                    }
                                  }
                                ],
                                attributes_mapping: {
                                  required_attribute: [
                                    {
                                      amazon_attribute: "binding",
                                      shopify_attribute: "",
                                      recommendation: "bath book",
                                      custom_text: "",
                                      shopify_select: "recommendation"
                                    },
                                    {
                                      amazon_attribute: "manufacturer",
                                      shopify_attribute: "product_type",
                                      recommendation: "",
                                      custom_text: "",
                                      shopify_select: "Search"
                                    },
                                    {
                                      amazon_attribute: "author1",
                                      shopify_attribute: "type",
                                      recommendation: "",
                                      custom_text: "",
                                      shopify_select: "Search"
                                    },
                                    {
                                      amazon_attribute: "publication_date",
                                      shopify_attribute: "type",
                                      recommendation: "",
                                      custom_text: "",
                                      shopify_select: "Search"
                                    },
                                    {
                                      amazon_attribute: "language_published",
                                      shopify_attribute: "",
                                      recommendation: "Scandinavian",
                                      custom_text: "",
                                      shopify_select: "recommendation"
                                    },
                                    {
                                      amazon_attribute: "country_of_origin",
                                      shopify_attribute: "",
                                      recommendation: "China",
                                      custom_text: "",
                                      shopify_select: "recommendation"
                                    },
                                    {
                                      amazon_attribute:
                                        "external_product_information",
                                      shopify_attribute: "description",
                                      recommendation: "",
                                      custom_text: "",
                                      shopify_select: "Search"
                                    },
                                    {
                                      amazon_attribute: "maximum_retail_price",
                                      shopify_attribute: "product_type",
                                      recommendation: "",
                                      custom_text: "",
                                      shopify_select: "Search"
                                    }
                                  ],
                                  optional_attribute: [],
                                  _id: {
                                    $oid: "6360c7a8a4e3ac53cf524b75"
                                  }
                                },
                                type: "warehouse",
                                profile_id: {
                                  $oid: "6360c7a8a4e3ac53cf524b7a"
                                }
                              }
                            ],
                            type: "shop",
                            profile_id: {
                              $oid: "6360c7a8a4e3ac53cf524b7a"
                            }
                          }
                        ]
                      }
                    ],
                    type: "warehouse",
                    profile_id: {
                      $oid: "6360c7a8a4e3ac53cf524b7a"
                    }
                  }
                ],
                type: "shop",
                profile_id: {
                  $oid: "6360c7a8a4e3ac53cf524b7a"
                }
              }
            ]
          }
        ],
        type: "profile",
        product_update_in_progress: false,
        shop_ids: [
          {
            source: "500",
            target: "530"
          }
        ],
        user_id: "63329d7f0451c074aa0e15a8",
        manual_search: "b"
      },
      {
        _id: {
          $oid: "6360c7a8a4e3ac53cf524b7a"
        },
        name: "test",
        query: "",
        queryArray: [
          [
            {
              attribute: "",
              condition: "",
              value: ""
            }
          ]
        ],
        manual_product_ids: ["7906616148201", "7906615656681"],
        category_id: {
          primary_category: "book",
          sub_category: "bookloader",
          browser_node_id: "1318145031",
          barcode_exemption: false,
          displayPath: [
            "Books",
            "Language, Linguistics & Writing",
            "Dictionaries"
          ],
          parentNodes: ["976389031", "976390031", "1318144031", "1318145031"],
          type: ""
        },
        overWriteExistingProducts: false,
        data: [
          {
            data_type: "pricing_settings",
            title: "test_pricing_template",
            data: {
              data_type: "price_settings",
              settings_enabled: true,
              settings_selected: {
                sale_price: false,
                business_price: false,
                minimum_price: false
              },
              standard_price: {
                attribute: "default",
                value: ""
              },
              sale_price: {
                attribute: "default",
                value: "",
                start_date: "",
                end_date: ""
              },
              business_price: {
                attribute: "default",
                value: ""
              },
              minimum_price: {
                attribute: "default",
                value: ""
              }
            }
          },
          {
            data_type: "inventory_settings",
            title: "test_inventory_template",
            data: {
              data_type: "inventory_settings",
              settings_enabled: true,
              settings_selected: {
                max_inventory_level: false,
                fixed_inventory: false,
                threshold_inventory: false,
                delete_out_of_stock: false,
                reserved_inventory: false,
                inventory_fulfillment_latency: true,
                warehouses_settings: true,
                customize_inventory: false
              },
              enable_max_inventory_level: true,
              max_inventory_level: "999",
              fixed_inventory: "",
              threshold_inventory: "",
              reserved_inventory: "",
              warehouses_settings: ["71247167721"],
              inventory_fulfillment_latency: "4",
              customize_inventory: {
                attribute: "default",
                value: ""
              }
            }
          },
          {
            data_type: "product_settings",
            title: "test_product_template",
            data: {
              data_type: "product_settings",
              settings_enabled: true,
              images: false,
              product_details: false,
              selected_attributes: [],
              sync_status_with: {
                sku: false,
                barcode: false
              }
            }
          }
        ],
        attributes_mapping: {
          required_attribute: [
            {
              amazon_attribute: "binding",
              shopify_attribute: "",
              recommendation: "bath book",
              custom_text: "",
              shopify_select: "recommendation"
            },
            {
              amazon_attribute: "manufacturer",
              shopify_attribute: "product_type",
              recommendation: "",
              custom_text: "",
              shopify_select: "Search"
            },
            {
              amazon_attribute: "author1",
              shopify_attribute: "type",
              recommendation: "",
              custom_text: "",
              shopify_select: "Search"
            },
            {
              amazon_attribute: "publication_date",
              shopify_attribute: "type",
              recommendation: "",
              custom_text: "",
              shopify_select: "Search"
            },
            {
              amazon_attribute: "language_published",
              shopify_attribute: "",
              recommendation: "Scandinavian",
              custom_text: "",
              shopify_select: "recommendation"
            },
            {
              amazon_attribute: "country_of_origin",
              shopify_attribute: "",
              recommendation: "China",
              custom_text: "",
              shopify_select: "recommendation"
            },
            {
              amazon_attribute: "external_product_information",
              shopify_attribute: "description",
              recommendation: "",
              custom_text: "",
              shopify_select: "Search"
            },
            {
              amazon_attribute: "maximum_retail_price",
              shopify_attribute: "product_type",
              recommendation: "",
              custom_text: "",
              shopify_select: "Search"
            }
          ],
          optional_attribute: [],
          _id: {
            $oid: "6360c7a8a4e3ac53cf524b75"
          }
        },
        targets: [
          {
            target_marketplace: "amazon",
            skip_query: "",
            category_id: {
              primary_category: "book",
              sub_category: "bookloader",
              browser_node_id: "1318145031",
              barcode_exemption: false,
              displayPath: [
                "Books",
                "Language, Linguistics & Writing",
                "Dictionaries"
              ],
              parentNodes: ["976389031", "976390031", "1318144031", "1318145031"],
              type: ""
            },
            data: [
              {
                data_type: "pricing_settings",
                title: "test_pricing_template",
                data: {
                  data_type: "price_settings",
                  settings_enabled: true,
                  settings_selected: {
                    sale_price: false,
                    business_price: false,
                    minimum_price: false
                  },
                  standard_price: {
                    attribute: "default",
                    value: ""
                  },
                  sale_price: {
                    attribute: "default",
                    value: "",
                    start_date: "",
                    end_date: ""
                  },
                  business_price: {
                    attribute: "default",
                    value: ""
                  },
                  minimum_price: {
                    attribute: "default",
                    value: ""
                  }
                }
              },
              {
                data_type: "inventory_settings",
                title: "test_inventory_template",
                data: {
                  data_type: "inventory_settings",
                  settings_enabled: true,
                  settings_selected: {
                    max_inventory_level: false,
                    fixed_inventory: false,
                    threshold_inventory: false,
                    delete_out_of_stock: false,
                    reserved_inventory: false,
                    inventory_fulfillment_latency: true,
                    warehouses_settings: true,
                    customize_inventory: false
                  },
                  enable_max_inventory_level: true,
                  max_inventory_level: "999",
                  fixed_inventory: "",
                  threshold_inventory: "",
                  reserved_inventory: "",
                  warehouses_settings: ["71247167721"],
                  inventory_fulfillment_latency: "4",
                  customize_inventory: {
                    attribute: "default",
                    value: ""
                  }
                }
              },
              {
                data_type: "product_settings",
                title: "test_product_template",
                data: {
                  data_type: "product_settings",
                  settings_enabled: true,
                  images: false,
                  product_details: false,
                  selected_attributes: [],
                  sync_status_with: {
                    sku: false,
                    barcode: false
                  }
                }
              }
            ],
            attributes_mapping: {
              required_attribute: [
                {
                  amazon_attribute: "binding",
                  shopify_attribute: "",
                  recommendation: "bath book",
                  custom_text: "",
                  shopify_select: "recommendation"
                },
                {
                  amazon_attribute: "manufacturer",
                  shopify_attribute: "product_type",
                  recommendation: "",
                  custom_text: "",
                  shopify_select: "Search"
                },
                {
                  amazon_attribute: "author1",
                  shopify_attribute: "type",
                  recommendation: "",
                  custom_text: "",
                  shopify_select: "Search"
                },
                {
                  amazon_attribute: "publication_date",
                  shopify_attribute: "type",
                  recommendation: "",
                  custom_text: "",
                  shopify_select: "Search"
                },
                {
                  amazon_attribute: "language_published",
                  shopify_attribute: "",
                  recommendation: "Scandinavian",
                  custom_text: "",
                  shopify_select: "recommendation"
                },
                {
                  amazon_attribute: "country_of_origin",
                  shopify_attribute: "",
                  recommendation: "China",
                  custom_text: "",
                  shopify_select: "recommendation"
                },
                {
                  amazon_attribute: "external_product_information",
                  shopify_attribute: "description",
                  recommendation: "",
                  custom_text: "",
                  shopify_select: "Search"
                },
                {
                  amazon_attribute: "maximum_retail_price",
                  shopify_attribute: "product_type",
                  recommendation: "",
                  custom_text: "",
                  shopify_select: "Search"
                }
              ],
              optional_attribute: [],
              _id: {
                $oid: "6360c7a8a4e3ac53cf524b75"
              }
            },
            shops: [
              {
                _id: {
                  $oid: "6360c7a8a4e3ac53cf524b79"
                },
                shop_id: "530",
                active: 1,
                warehouses: [
                  {
                    _id: {
                      $oid: "6360c7a8a4e3ac53cf524b78"
                    },
                    warehouse_id: "*warehouse_id",
                    active: 1,
                    data: [
                      {
                        data_type: "pricing_settings",
                        title: "test_pricing_template",
                        data: {
                          data_type: "price_settings",
                          settings_enabled: true,
                          settings_selected: {
                            sale_price: false,
                            business_price: false,
                            minimum_price: false
                          },
                          standard_price: {
                            attribute: "default",
                            value: ""
                          },
                          sale_price: {
                            attribute: "default",
                            value: "",
                            start_date: "",
                            end_date: ""
                          },
                          business_price: {
                            attribute: "default",
                            value: ""
                          },
                          minimum_price: {
                            attribute: "default",
                            value: ""
                          }
                        }
                      },
                      {
                        data_type: "inventory_settings",
                        title: "test_inventory_template",
                        data: {
                          data_type: "inventory_settings",
                          settings_enabled: true,
                          settings_selected: {
                            max_inventory_level: false,
                            fixed_inventory: false,
                            threshold_inventory: false,
                            delete_out_of_stock: false,
                            reserved_inventory: false,
                            inventory_fulfillment_latency: true,
                            warehouses_settings: true,
                            customize_inventory: false
                          },
                          enable_max_inventory_level: true,
                          max_inventory_level: "999",
                          fixed_inventory: "",
                          threshold_inventory: "",
                          reserved_inventory: "",
                          warehouses_settings: ["71247167721"],
                          inventory_fulfillment_latency: "4",
                          customize_inventory: {
                            attribute: "default",
                            value: ""
                          }
                        }
                      },
                      {
                        data_type: "product_settings",
                        title: "test_product_template",
                        data: {
                          data_type: "product_settings",
                          settings_enabled: true,
                          images: false,
                          product_details: false,
                          selected_attributes: [],
                          sync_status_with: {
                            sku: false,
                            barcode: false
                          }
                        }
                      }
                    ],
                    attributes_mapping: {
                      required_attribute: [
                        {
                          amazon_attribute: "binding",
                          shopify_attribute: "",
                          recommendation: "bath book",
                          custom_text: "",
                          shopify_select: "recommendation"
                        },
                        {
                          amazon_attribute: "manufacturer",
                          shopify_attribute: "product_type",
                          recommendation: "",
                          custom_text: "",
                          shopify_select: "Search"
                        },
                        {
                          amazon_attribute: "author1",
                          shopify_attribute: "type",
                          recommendation: "",
                          custom_text: "",
                          shopify_select: "Search"
                        },
                        {
                          amazon_attribute: "publication_date",
                          shopify_attribute: "type",
                          recommendation: "",
                          custom_text: "",
                          shopify_select: "Search"
                        },
                        {
                          amazon_attribute: "language_published",
                          shopify_attribute: "",
                          recommendation: "Scandinavian",
                          custom_text: "",
                          shopify_select: "recommendation"
                        },
                        {
                          amazon_attribute: "country_of_origin",
                          shopify_attribute: "",
                          recommendation: "China",
                          custom_text: "",
                          shopify_select: "recommendation"
                        },
                        {
                          amazon_attribute: "external_product_information",
                          shopify_attribute: "description",
                          recommendation: "",
                          custom_text: "",
                          shopify_select: "Search"
                        },
                        {
                          amazon_attribute: "maximum_retail_price",
                          shopify_attribute: "product_type",
                          recommendation: "",
                          custom_text: "",
                          shopify_select: "Search"
                        }
                      ],
                      optional_attribute: [],
                      _id: {
                        $oid: "6360c7a8a4e3ac53cf524b75"
                      }
                    },
                    sources: [
                      {
                        source_marketplace: "shopify",
                        data: [
                          {
                            data_type: "pricing_settings",
                            title: "test_pricing_template",
                            data: {
                              data_type: "price_settings",
                              settings_enabled: true,
                              settings_selected: {
                                sale_price: false,
                                business_price: false,
                                minimum_price: false
                              },
                              standard_price: {
                                attribute: "default",
                                value: ""
                              },
                              sale_price: {
                                attribute: "default",
                                value: "",
                                start_date: "",
                                end_date: ""
                              },
                              business_price: {
                                attribute: "default",
                                value: ""
                              },
                              minimum_price: {
                                attribute: "default",
                                value: ""
                              }
                            }
                          },
                          {
                            data_type: "inventory_settings",
                            title: "test_inventory_template",
                            data: {
                              data_type: "inventory_settings",
                              settings_enabled: true,
                              settings_selected: {
                                max_inventory_level: false,
                                fixed_inventory: false,
                                threshold_inventory: false,
                                delete_out_of_stock: false,
                                reserved_inventory: false,
                                inventory_fulfillment_latency: true,
                                warehouses_settings: true,
                                customize_inventory: false
                              },
                              enable_max_inventory_level: true,
                              max_inventory_level: "999",
                              fixed_inventory: "",
                              threshold_inventory: "",
                              reserved_inventory: "",
                              warehouses_settings: ["71247167721"],
                              inventory_fulfillment_latency: "4",
                              customize_inventory: {
                                attribute: "default",
                                value: ""
                              }
                            }
                          },
                          {
                            data_type: "product_settings",
                            title: "test_product_template",
                            data: {
                              data_type: "product_settings",
                              settings_enabled: true,
                              images: false,
                              product_details: false,
                              selected_attributes: [],
                              sync_status_with: {
                                sku: false,
                                barcode: false
                              }
                            }
                          }
                        ],
                        attributes_mapping: {
                          required_attribute: [
                            {
                              amazon_attribute: "binding",
                              shopify_attribute: "",
                              recommendation: "bath book",
                              custom_text: "",
                              shopify_select: "recommendation"
                            },
                            {
                              amazon_attribute: "manufacturer",
                              shopify_attribute: "product_type",
                              recommendation: "",
                              custom_text: "",
                              shopify_select: "Search"
                            },
                            {
                              amazon_attribute: "author1",
                              shopify_attribute: "type",
                              recommendation: "",
                              custom_text: "",
                              shopify_select: "Search"
                            },
                            {
                              amazon_attribute: "publication_date",
                              shopify_attribute: "type",
                              recommendation: "",
                              custom_text: "",
                              shopify_select: "Search"
                            },
                            {
                              amazon_attribute: "language_published",
                              shopify_attribute: "",
                              recommendation: "Scandinavian",
                              custom_text: "",
                              shopify_select: "recommendation"
                            },
                            {
                              amazon_attribute: "country_of_origin",
                              shopify_attribute: "",
                              recommendation: "China",
                              custom_text: "",
                              shopify_select: "recommendation"
                            },
                            {
                              amazon_attribute: "external_product_information",
                              shopify_attribute: "description",
                              recommendation: "",
                              custom_text: "",
                              shopify_select: "Search"
                            },
                            {
                              amazon_attribute: "maximum_retail_price",
                              shopify_attribute: "product_type",
                              recommendation: "",
                              custom_text: "",
                              shopify_select: "Search"
                            }
                          ],
                          optional_attribute: [],
                          _id: {
                            $oid: "6360c7a8a4e3ac53cf524b75"
                          }
                        },
                        shops: [
                          {
                            _id: {
                              $oid: "6360c7a8a4e3ac53cf524b77"
                            },
                            shop_id: "500",
                            active: 1,
                            warehouses: [
                              {
                                _id: {
                                  $oid: "6360c7a8a4e3ac53cf524b76"
                                },
                                warehouse_id: "*warehouse_id",
                                active: 1,
                                Rule: "Not decided yet",
                                data: [
                                  {
                                    data_type: "pricing_settings",
                                    title: "test_pricing_template",
                                    data: {
                                      data_type: "price_settings",
                                      settings_enabled: true,
                                      settings_selected: {
                                        sale_price: false,
                                        business_price: false,
                                        minimum_price: false
                                      },
                                      standard_price: {
                                        attribute: "default",
                                        value: ""
                                      },
                                      sale_price: {
                                        attribute: "default",
                                        value: "",
                                        start_date: "",
                                        end_date: ""
                                      },
                                      business_price: {
                                        attribute: "default",
                                        value: ""
                                      },
                                      minimum_price: {
                                        attribute: "default",
                                        value: ""
                                      }
                                    }
                                  },
                                  {
                                    data_type: "inventory_settings",
                                    title: "test_inventory_template",
                                    data: {
                                      data_type: "inventory_settings",
                                      settings_enabled: true,
                                      settings_selected: {
                                        max_inventory_level: false,
                                        fixed_inventory: false,
                                        threshold_inventory: false,
                                        delete_out_of_stock: false,
                                        reserved_inventory: false,
                                        inventory_fulfillment_latency: true,
                                        warehouses_settings: true,
                                        customize_inventory: false
                                      },
                                      enable_max_inventory_level: true,
                                      max_inventory_level: "999",
                                      fixed_inventory: "",
                                      threshold_inventory: "",
                                      reserved_inventory: "",
                                      warehouses_settings: ["71247167721"],
                                      inventory_fulfillment_latency: "4",
                                      customize_inventory: {
                                        attribute: "default",
                                        value: ""
                                      }
                                    }
                                  },
                                  {
                                    data_type: "product_settings",
                                    title: "test_product_template",
                                    data: {
                                      data_type: "product_settings",
                                      settings_enabled: true,
                                      images: false,
                                      product_details: false,
                                      selected_attributes: [],
                                      sync_status_with: {
                                        sku: false,
                                        barcode: false
                                      }
                                    }
                                  }
                                ],
                                attributes_mapping: {
                                  required_attribute: [
                                    {
                                      amazon_attribute: "binding",
                                      shopify_attribute: "",
                                      recommendation: "bath book",
                                      custom_text: "",
                                      shopify_select: "recommendation"
                                    },
                                    {
                                      amazon_attribute: "manufacturer",
                                      shopify_attribute: "product_type",
                                      recommendation: "",
                                      custom_text: "",
                                      shopify_select: "Search"
                                    },
                                    {
                                      amazon_attribute: "author1",
                                      shopify_attribute: "type",
                                      recommendation: "",
                                      custom_text: "",
                                      shopify_select: "Search"
                                    },
                                    {
                                      amazon_attribute: "publication_date",
                                      shopify_attribute: "type",
                                      recommendation: "",
                                      custom_text: "",
                                      shopify_select: "Search"
                                    },
                                    {
                                      amazon_attribute: "language_published",
                                      shopify_attribute: "",
                                      recommendation: "Scandinavian",
                                      custom_text: "",
                                      shopify_select: "recommendation"
                                    },
                                    {
                                      amazon_attribute: "country_of_origin",
                                      shopify_attribute: "",
                                      recommendation: "China",
                                      custom_text: "",
                                      shopify_select: "recommendation"
                                    },
                                    {
                                      amazon_attribute:
                                        "external_product_information",
                                      shopify_attribute: "description",
                                      recommendation: "",
                                      custom_text: "",
                                      shopify_select: "Search"
                                    },
                                    {
                                      amazon_attribute: "maximum_retail_price",
                                      shopify_attribute: "product_type",
                                      recommendation: "",
                                      custom_text: "",
                                      shopify_select: "Search"
                                    }
                                  ],
                                  optional_attribute: [],
                                  _id: {
                                    $oid: "6360c7a8a4e3ac53cf524b75"
                                  }
                                },
                                type: "warehouse",
                                profile_id: {
                                  $oid: "6360c7a8a4e3ac53cf524b7a"
                                }
                              }
                            ],
                            type: "shop",
                            profile_id: {
                              $oid: "6360c7a8a4e3ac53cf524b7a"
                            }
                          }
                        ]
                      }
                    ],
                    type: "warehouse",
                    profile_id: {
                      $oid: "6360c7a8a4e3ac53cf524b7a"
                    }
                  }
                ],
                type: "shop",
                profile_id: {
                  $oid: "6360c7a8a4e3ac53cf524b7a"
                }
              }
            ]
          }
        ],
        type: "profile",
        product_update_in_progress: false,
        shop_ids: [
          {
            source: "500",
            target: "530"
          }
        ],
        user_id: "63329d7f0451c074aa0e15a8",
        manual_search: "b"
      }
    ]
  };
  
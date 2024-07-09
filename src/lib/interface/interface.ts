/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
    collections: {
      users: User;
      pages: Page;
      categories: Category;
      products: Product;
      contacts: Contact;
      media: Media;
      'payload-preferences': PayloadPreference;
      'payload-migrations': PayloadMigration;
    };
    globals: {
      global: Global;
    };
  }
  /**
   * This interface was referenced by `Config`'s JSON-Schema
   * via the `definition` "users".
   */
  export interface User {
    id: string;
    name: string;
    role: 'admin' | 'reviewer' | 'guest';
    updatedAt: string;
    createdAt: string;
    email: string;
    resetPasswordToken?: string | null;
    resetPasswordExpiration?: string | null;
    salt?: string | null;
    hash?: string | null;
    loginAttempts?: number | null;
    lockUntil?: string | null;
    password: string | null;
  }
  /**
   * This interface was referenced by `Config`'s JSON-Schema
   * via the `definition` "pages".
   */
  export interface Page {
    docs : [{
        id: string;
        title: string;
        slug?: string | null;
        description?: string | null;
        body?:
          | (
              | {
                  header: {
                    title: string;
                    subTitle?: string | null;
                    description?: string | null;
                  };
                  links?:
                    | {
                        link: {
                          type?: ('button' | 'link') | null;
                          title: string;
                          href: string;
                          collectionToShow?:
                            | (
                                | {
                                    relationTo: 'categories';
                                    value: string | Category;
                                  }
                                | {
                                    relationTo: 'products';
                                    value: string | Product;
                                  }
                                | {
                                    relationTo: 'contacts';
                                    value: string | Contact;
                                  }
                              )[]
                            | null;
                        };
                        id?: string | null;
                      }[]
                    | null;
                  images?:
                    | {
                        title?: string | null;
                        image: string | Media;
                        caption?: string | null;
                        id?: string | null;
                      }[]
                    | null;
                  id?: string | null;
                  blockName?: string | null;
                  blockType: 'heroBlock';
                }
              | {
                  header: {
                    title: string;
                    subTitle?: string | null;
                    description?: string | null;
                  };
                  files?:
                    | {
                        title?: string | null;
                        file: string | Media;
                        caption?: string | null;
                        id?: string | null;
                      }[]
                    | null;
                  id?: string | null;
                  blockName?: string | null;
                  blockType: 'fileBlock';
                }
              | {
                  header: {
                    title: string;
                    subTitle?: string | null;
                    description?: string | null;
                  };
                  cards?:
                    | {
                        card: {
                          title: string;
                          description?: string | null;
                          collectionToShow?:
                            | ({
                                relationTo: 'categories';
                                value: string | Category;
                              } | null)
                            | ({
                                relationTo: 'products';
                                value: string | Product;
                              } | null)
                            | ({
                                relationTo: 'contacts';
                                value: string | Contact;
                              } | null);
                          images?:
                            | {
                                title?: string | null;
                                image: string | Media;
                                caption?: string | null;
                                id?: string | null;
                              }[]
                            | null;
                          links?:
                            | {
                                link: {
                                  type?: ('button' | 'link') | null;
                                  title: string;
                                  href: string;
                                  collectionToShow?:
                                    | (
                                        | {
                                            relationTo: 'categories';
                                            value: string | Category;
                                          }
                                        | {
                                            relationTo: 'products';
                                            value: string | Product;
                                          }
                                        | {
                                            relationTo: 'contacts';
                                            value: string | Contact;
                                          }
                                      )[]
                                    | null;
                                };
                                id?: string | null;
                              }[]
                            | null;
                        };
                        id?: string | null;
                      }[]
                    | null;
                  id?: string | null;
                  blockName?: string | null;
                  blockType: 'cardBlock';
                }
              | {
                  header: {
                    title: string;
                    subTitle?: string | null;
                    description?: string | null;
                  };
                  images?:
                    | {
                        title?: string | null;
                        image: string | Media;
                        caption?: string | null;
                        id?: string | null;
                      }[]
                    | null;
                  id?: string | null;
                  blockName?: string | null;
                  blockType: 'imageBlock';
                }
              | {
                  header: {
                    title: string;
                    subTitle?: string | null;
                    description?: string | null;
                  };
                  links?:
                    | {
                        link: {
                          type?: ('button' | 'link') | null;
                          title: string;
                          href: string;
                          collectionToShow?:
                            | (
                                | {
                                    relationTo: 'categories';
                                    value: string | Category;
                                  }
                                | {
                                    relationTo: 'products';
                                    value: string | Product;
                                  }
                                | {
                                    relationTo: 'contacts';
                                    value: string | Contact;
                                  }
                              )[]
                            | null;
                        };
                        id?: string | null;
                      }[]
                    | null;
                  id?: string | null;
                  blockName?: string | null;
                  blockType: 'linkBlock';
                }
              | {
                  header: {
                    title: string;
                    subTitle?: string | null;
                    description?: string | null;
                  };
                  collectionToShow?:
                    | (
                        | {
                            relationTo: 'categories';
                            value: string | Category;
                          }
                        | {
                            relationTo: 'products';
                            value: string | Product;
                          }
                        | {
                            relationTo: 'contacts';
                            value: string | Contact;
                          }
                      )[]
                    | null;
                  id?: string | null;
                  blockName?: string | null;
                  blockType: 'collectionBlock';
                }
            )[]
          | null;
        meta?: {
          title?: string | null;
          description?: string | null;
          image?: string | Media | null;
        };
        updatedAt: string;
        createdAt: string;
      }]    
  }
  /**
   * This interface was referenced by `Config`'s JSON-Schema
   * via the `definition` "categories".
   */
  export interface Category {
    id: string;
    title: string;
    slug?: string | null;
    description?: string | null;
    images?:
      | {
          title?: string | null;
          image: string | Media;
          caption?: string | null;
          id?: string | null;
        }[]
      | null;
    parent?: (string | null) | Category;
    breadcrumbs?:
      | {
          doc?: (string | null) | Category;
          url?: string | null;
          label?: string | null;
          id?: string | null;
        }[]
      | null;
    updatedAt: string;
    createdAt: string;
  }
  /**
   * This interface was referenced by `Config`'s JSON-Schema
   * via the `definition` "media".
   */
  export interface Media {
    id: string;
    alt?: string | null;
    updatedAt: string;
    createdAt: string;
    url?: string | null;
    filename?: string | null;
    mimeType?: string | null;
    filesize?: number | null;
    width?: number | null;
    height?: number | null;
    focalX?: number | null;
    focalY?: number | null;
  }
  /**
   * This interface was referenced by `Config`'s JSON-Schema
   * via the `definition` "products".
   */
  export interface Product {
    id: string;
    title: string;
    slug?: string | null;
    description?: string | null;
    category: string | Category;
    images?:
      | {
          title?: string | null;
          image: string | Media;
          caption?: string | null;
          id?: string | null;
        }[]
      | null;
    meta?: {
      title?: string | null;
      description?: string | null;
      image?: string | Media | null;
    };
    updatedAt: string;
    createdAt: string;
  }
  /**
   * This interface was referenced by `Config`'s JSON-Schema
   * via the `definition` "contacts".
   */
  export interface Contact {
    id: string;
    type: 'whatsapp' | 'email' | 'telephone' | 'location' | 'instagram' | 'x' | 'facebook' | 'youtube';
    content: string;
    updatedAt: string;
    createdAt: string;
  }
  /**
   * This interface was referenced by `Config`'s JSON-Schema
   * via the `definition` "payload-preferences".
   */
  export interface PayloadPreference {
    id: string;
    user: {
      relationTo: 'users';
      value: string | User;
    };
    key?: string | null;
    value?:
      | {
          [k: string]: unknown;
        }
      | unknown[]
      | string
      | number
      | boolean
      | null;
    updatedAt: string;
    createdAt: string;
  }
  /**
   * This interface was referenced by `Config`'s JSON-Schema
   * via the `definition` "payload-migrations".
   */
  export interface PayloadMigration {
    id: string;
    name?: string | null;
    batch?: number | null;
    updatedAt: string;
    createdAt: string;
  }
  /**
   * This interface was referenced by `Config`'s JSON-Schema
   * via the `definition` "global".
   */
  export interface Global {
    id: string;
    logo: string | Media;
    links?:
      | {
          link: {
            type?: ('button' | 'link') | null;
            title: string;
            href: string;
            collectionToShow?:
              | (
                  | {
                      relationTo: 'categories';
                      value: string | Category;
                    }
                  | {
                      relationTo: 'products';
                      value: string | Product;
                    }
                  | {
                      relationTo: 'contacts';
                      value: string | Contact;
                    }
                )[]
              | null;
          };
          id?: string | null;
        }[]
      | null;
    collectionToShow?:
      | (
          | {
              relationTo: 'categories';
              value: string | Category;
            }
          | {
              relationTo: 'products';
              value: string | Product;
            }
          | {
              relationTo: 'contacts';
              value: string | Contact;
            }
        )[]
      | null;
    updatedAt?: string | null;
    createdAt?: string | null;
  }
  
  
  
import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../../../css/crowdfunding/SearchCampaign.css";
import funding2 from "../../../../img/funding2.jpeg";
import { getAllCampaigns } from "../../../../actions/crowdfunding/campaign";

const SearchCampaign = ({ getAllCampaigns, campaigns, auth }) => {
  // useEffect(() => {
  //   getAllCampaigns();
  // }, [getAllCampaigns]);

  return (
    <Fragment>
      <section
        class='blog-banner-area'
        id='category'
        // style={{ background: "#ccc", height: "40vh" }}
      >
        <div class='container h-100'>
          <div
            class='blog-banner'
            // style={{ display: "block", margin: "auto", padding: " auto" }}
          >
            <div class='text-center'>
              <h1>Education</h1>
              {/* <nav aria-label='breadcrumb' class='banner-breadcrumb'>
                <ol class='breadcrumb'>
                  <li class='breadcrumb-item'>
                    <a href='#'>Education & learning for every path in life</a>
                  </li>
                </ol>
              </nav> */}
            </div>
          </div>
        </div>
      </section>
      {/* --------------- */}
      <section class='section-margin--small mb-5'>
        <div class='container'>
          <div class='row'>
            <div class='col-xl-3 col-lg-4 col-md-5'>
              <div class='sidebar-categories'>
                <div class='head'>Browse Categories</div>
                <ul class='main-categories'>
                  <li class='common-filter'>
                    <form>
                      <ul>
                        <li class='filter-list'>
                          <input
                            class='pixel-radio'
                            type='radio'
                            id='men'
                            name='brand'
                          />
                          <label for='men'>Medical</label>
                        </li>
                        <li class='filter-list'>
                          <input
                            class='pixel-radio'
                            type='radio'
                            id='women'
                            name='brand'
                          />
                          <label for='women'>Memorial</label>
                        </li>
                        <li class='filter-list'>
                          <input
                            class='pixel-radio'
                            type='radio'
                            id='accessories'
                            name='brand'
                          />
                          <label for='accessories'>Emergency</label>
                        </li>
                        <li class='filter-list'>
                          <input
                            class='pixel-radio'
                            type='radio'
                            id='footwear'
                            name='brand'
                          />
                          <label for='footwear'>Non-Profit</label>
                        </li>
                        <li class='filter-list'>
                          <input
                            class='pixel-radio'
                            type='radio'
                            id='bayItem'
                            name='brand'
                          />
                          <label for='bayItem'>Education</label>
                        </li>
                        <li class='filter-list'>
                          <input
                            class='pixel-radio'
                            type='radio'
                            id='electronics'
                            name='brand'
                          />
                          <label for='electronics'>Animals</label>
                        </li>
                        <li class='filter-list'>
                          <input
                            class='pixel-radio'
                            type='radio'
                            id='food'
                            name='brand'
                          />
                          <label for='food'>Business</label>
                        </li>
                        <li class='filter-list'>
                          <input
                            class='pixel-radio'
                            type='radio'
                            id='food'
                            name='brand'
                          />
                          <label for='food'>Creative</label>
                        </li>
                        <li class='filter-list'>
                          <input
                            class='pixel-radio'
                            type='radio'
                            id='food'
                            name='brand'
                          />
                          <label for='food'>Game</label>
                        </li>
                        <li class='filter-list'>
                          <input
                            class='pixel-radio'
                            type='radio'
                            id='food'
                            name='brand'
                          />
                          <label for='food'>Design&Tech</label>
                        </li>
                      </ul>
                    </form>
                  </li>
                </ul>
              </div>
            </div>
            <div class='col-xl-9 col-lg-8 col-md-7'>
              <div class='filter-bar d-flex flex-wrap align-items-center'>
                <div>
                  
                    <div class='d-flex justify-content-center h-100'>
                      <div class='searchbar'>
                        <input
                          class='search_input'
                          type='text'
                          name=''
                          placeholder='Search...'
                        />
                        <a href='#' class='search_icon'>
                          <i class='fas fa-search'></i>
                        </a>
                      </div>
                    </div>
                  
                  {/* <div class='input-group filter-bar-search'>
                    <input type='text' placeholder='Search' />
                    <div class='input-group-append'>
                      <button type='button'>
                        <i class='ti-search'></i>
                      </button>
                    </div>
                  </div> */}
                </div>
              </div>

              <section class='lattest-product-area pb-40 category-list'>
                <div class='row'>
                  <div class='col-md-6 col-lg-4'>
                    <div class='card text-center card-product'>
                      <div class='card-product__img'>
                        <img class='card-img' src={funding2} alt='' />
                        <ul class='card-product__imgOverlay'>
                          <li>
                            <button>
                              <i className='fas fa-heart'></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                      <div class='card-body'>
                        <p>Driver</p>
                        <h4 class='card-product__title'>
                          <a href='#'>USD DRIVER</a>
                        </h4>
                        <p class='card-product__price'>$30,000</p>
                      </div>
                    </div>
                  </div>

                  <div class='col-md-6 col-lg-4'>
                    <div class='card text-center card-product'>
                      <div class='card-product__img'>
                        <img class='card-img' src={funding2} alt='' />
                        <ul class='card-product__imgOverlay'>
                          <li>
                            <button>
                              <i className='fas fa-heart'></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                      <div class='card-body'>
                        <p>Driver</p>
                        <h4 class='card-product__title'>
                          <a href='#'>USD DRIVER</a>
                        </h4>
                        <p class='card-product__price'>$30,000</p>
                      </div>
                    </div>
                  </div>

                  <div class='col-md-6 col-lg-4'>
                    <div class='card text-center card-product'>
                      <div class='card-product__img'>
                        <img class='card-img' src={funding2} alt='' />
                        <ul class='card-product__imgOverlay'>
                          <li>
                            <button>
                              <i className='fas fa-heart'></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                      <div class='card-body'>
                        <p>Decor</p>
                        <h4 class='card-product__title'>
                          <a href='#'>Room Flash Light</a>
                        </h4>
                        <p class='card-product__price'>$30,000</p>
                      </div>
                    </div>
                  </div>

                  <div class='col-md-6 col-lg-4'>
                    <div class='card text-center card-product'>
                      <div class='card-product__img'>
                        <img class='card-img' src={funding2} alt='' />
                        <ul class='card-product__imgOverlay'>
                          <li>
                            <button>
                              <i className='fas fa-heart'></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                      <div class='card-body'>
                        <p>Memorial</p>
                        <h4 class='card-product__title'>
                          <a href='#'>auto software Light</a>
                        </h4>
                        <p class='card-product__price'>$30,000</p>
                      </div>
                    </div>
                  </div>

                  <div class='col-md-6 col-lg-4'>
                    <div class='card text-center card-product'>
                      <div class='card-product__img'>
                        <img class='card-img' src={funding2} alt='' />
                        <ul class='card-product__imgOverlay'>
                          <li>
                            <button>
                              <i className='fas fa-heart'></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                      <div class='card-body'>
                        <p>Creativity</p>
                        <h4 class='card-product__title'>
                          <a href='#'>Mangament software</a>
                        </h4>
                        <p class='card-product__price'>$30,000</p>
                      </div>
                    </div>
                  </div>

                  <div class='col-md-6 col-lg-4'>
                    <div class='card text-center card-product'>
                      <div class='card-product__img'>
                        <img class='card-img' src={funding2} alt='' />
                        <ul class='card-product__imgOverlay'>
                          <li>
                            <button>
                              <i className='fas fa-heart'></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                      <div class='card-body'>
                        <p>Design & Tech</p>
                        <h4 class='card-product__title'>
                          <a href='#'>auto software Car</a>
                        </h4>
                        <p class='card-product__price'>$30,000</p>
                      </div>
                    </div>
                  </div>

                  <div class='col-md-6 col-lg-4'>
                    <div class='card text-center card-product'>
                      <div class='card-product__img'>
                        <img class='card-img' src={funding2} alt='' />
                        <ul class='card-product__imgOverlay'>
                          <li>
                            <button>
                              <i className='fas fa-heart'></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                      <div class='card-body'>
                        <p>Design & Text</p>
                        <h4 class='card-product__title'>
                          <a href='#'>Blutooth Speaker</a>
                        </h4>
                        <p class='card-product__price'>$30,000</p>
                      </div>
                    </div>
                  </div>
                  <div class='col-md-6 col-lg-4'>
                    <div class='card text-center card-product'>
                      <div class='card-product__img'>
                        <img class='card-img' src={funding2} alt='' />
                        <ul class='card-product__imgOverlay'>
                          <li>
                            <button>
                              <i className='fas fa-heart'></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                      <div class='card-body'>
                        <p>Creativity</p>
                        <h4 class='card-product__title'>
                          <a href='#'>Bluetooth</a>
                        </h4>
                        <p class='card-product__price'>$30,000</p>
                      </div>
                    </div>
                  </div>

                  <div class='col-md-6 col-lg-4'>
                    <div class='card text-center card-product'>
                      <div class='card-product__img'>
                        <img class='card-img' src={funding2} alt='' />
                        <ul class='card-product__imgOverlay'>
                          <li>
                            <button>
                              <i className='fas fa-heart'></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                      <div class='card-body'>
                        <p>Creativity</p>
                        <h4 class='card-product__title'>
                          <a href='#'>Automatic watch</a>
                        </h4>
                        <p class='card-product__price'>$30,000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <section class='subscribe-position'>
        <div class='container'>
          <div class='subscribe text-center'>
            <h3 class='subscribe__title'>Get Update From Anywhere</h3>
            <p>
              Bearing Void gathering light light his eavening unto dont afraid
            </p>
            <div id='mc_embed_signup'>
              <form>
                <div class='form-group ml-sm-auto'>
                  <div class='info'></div>
                </div>
                {/* <button
                  class='button button-subscribe mr-auto mb-1'
                  type='submit'
                >
                  Start a Campaign
                </button> */}
                <Link
                  className='button button-subscribe mr-auto mb-1'
                  // type='submit'
                  to={`/crowdfunding/campaignform`}
                >
                  View Details
                </Link>
                <div style={{ position: "absolute", left: "-5000px" }}>
                  <input
                    name='b_36c4fd991d266f23781ded980_aefe40901a'
                    tabindex='-1'
                    value=''
                    type='text'
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

SearchCampaign.propTypes = {
  // getAllCampaigns: PropTypes.func.isRequired,
  // campaigns: PropTypes.array.isRequired,,
  // auth: PropTypes.object.isRequired
};

export default SearchCampaign;

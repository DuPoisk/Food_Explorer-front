import styled from "styled-components";

export const Container= styled.div`

  /* Add some basic styling to the carousel container */
  .carousel-container {
    width: 80%;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }

  /* Style individual cards */
  .card {
    background-color: #fff;
    border: 1px solid #e0e0e0;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin: 10px;
    text-align: center;
  }

  .card img {
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
  }

  .card h3 {
    font-size: 1.2em;
    margin: 10px 0;
  }

  .card p {
    font-size: 1em;
    color: #555;
  }

  /* Style the navigation dots */
  .slick-dots {
    text-align: center;
  }

  .slick-dots li {
    display: inline-block;
    margin: 0 5px;
    padding: 0;
    cursor: pointer;
  }

  .slick-dots li button {
    font-size: 20px;
    line-height: 1;
    color: #777;
    border: none;
    background: transparent;
    cursor: pointer;
  }

  .slick-dots li.slick-active button {
    color: #3498db;
  }
`

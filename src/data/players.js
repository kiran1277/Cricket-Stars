"use strict";

const players = [
  {
    'id': 'sachin-tendulkar',
    'name': 'Sachin Tendulkar',
    'country': 'in',
    'birth': '1973',
    'image': 'sachin-tendulkar.jpg',
    'cover': 'sachin-tendulkar-cover.jpg',
    'link': 'https://en.wikipedia.org/wiki/Sachin_Tendulkar',
    'centuries': [
      { 'year': '1994', 'type': 'W', 'city': 'Colombo', 'against': 'Austarlia', 'score': '110' },
      { 'year': '1994', 'type': 'W', 'city': 'Vadodara', 'against': 'New Zealand', 'score': '115' },
      { 'year': '1995', 'type': 'L', 'city': 'New Delhi', 'against': 'Sri Lanks', 'score': '137' },
      { 'year': '1996', 'type': 'W', 'city': 'Sharjah', 'against': 'Pakistan', 'score': '118' },
      { 'year': '1997', 'type': 'W', 'city': 'Hyderabd', 'against': 'South Africa', 'score': '101' },
      { 'year': '1998', 'type': 'NR', 'city': 'Sydney', 'against': 'Austarlia', 'score': '120' },
      { 'year': '1999', 'type': 'W', 'city': 'Colombo', 'against': 'Austarlia', 'score': '110' },
      { 'year': '1999', 'type': 'W', 'city': 'Vadodara', 'against': 'New Zealand', 'score': '115' },
      { 'year': '2000', 'type': 'L', 'city': 'New Delhi', 'against': 'Sri Lanks', 'score': '137' },
      { 'year': '2001', 'type': 'W', 'city': 'Sharjah', 'against': 'Pakistan', 'score': '118' },
      { 'year': '2002', 'type': 'W', 'city': 'Hyderabd', 'against': 'South Africa', 'score': '101' },
      { 'year': '2003', 'type': 'NR', 'city': 'Sydney', 'against': 'West Indies', 'score': '140' }
    ],
  },
  {
    'id': 'shahid-afridi',
    'name': 'Shahid Afridi',
    'country': 'pk',
    'birth': '1980',
    'image': 'shahid-afridi.jpg',
    'cover': 'shahid-afridi-cover.jpg',
    'link': 'https://en.wikipedia.org/wiki/Shahid_Afridi',
    'centuries': [
      { 'year': '2000', 'type': 'W', 'city': 'Colombo', 'against': 'Austarlia', 'score': '110' },
      { 'year': '2000', 'type': 'W', 'city': 'Vadodara', 'against': 'New Zealand', 'score': '115' },
      { 'year': '2001', 'type': 'L', 'city': 'New Delhi', 'against': 'Sri Lanks', 'score': '137' },
      { 'year': '2003', 'type': 'W', 'city': 'Sharjah', 'against': 'India', 'score': '118' },
      { 'year': '2003', 'type': 'W', 'city': 'Hyderabd', 'against': 'South Africa', 'score': '101' },
      { 'year': '2004', 'type': 'NR', 'city': 'Sydney', 'against': 'Austarlia', 'score': '120' },
      { 'year': '2005', 'type': 'W', 'city': 'Colombo', 'against': 'Austarlia', 'score': '110' },
      { 'year': '2006', 'type': 'W', 'city': 'Vadodara', 'against': 'New Zealand', 'score': '115' },
      { 'year': '2007', 'type': 'L', 'city': 'New Delhi', 'against': 'Sri Lanks', 'score': '137' },
      { 'year': '2008', 'type': 'W', 'city': 'Sharjah', 'against': 'India', 'score': '118' },
      { 'year': '2009', 'type': 'W', 'city': 'Hyderabd', 'against': 'South Africa', 'score': '101' },
      { 'year': '2010', 'type': 'NR', 'city': 'Sydney', 'against': 'West Indies', 'score': '140' }
    ],
  },
  {
    'id': 'muttiah-muralitharan',
    'name': 'Muttiah Muralitharan',
    'country': 'sl',
    'birth': '1972',
    'image': 'muttiah-muralitharan.jpg',
    'cover': 'muttiah-muralitharan-cover.jpg',
    'link': 'https://en.wikipedia.org/wiki/Muttiah_Muralitharan',
    'centuries': [
      { 'year': '1997', 'type': 'W', 'city': 'Hyderabd', 'against': 'South Africa', 'score': '101' },
      { 'year': '1998', 'type': 'NR', 'city': 'Sydney', 'against': 'Austarlia', 'score': '120' },
      { 'year': '1999', 'type': 'W', 'city': 'Colombo', 'against': 'Austarlia', 'score': '110' },
      { 'year': '1999', 'type': 'W', 'city': 'Vadodara', 'against': 'New Zealand', 'score': '115' },
      { 'year': '2000', 'type': 'L', 'city': 'New Delhi', 'against': 'India', 'score': '137' },
      { 'year': '2001', 'type': 'W', 'city': 'Sharjah', 'against': 'Pakistan', 'score': '118' },
      { 'year': '2002', 'type': 'W', 'city': 'Hyderabd', 'against': 'South Africa', 'score': '101' },
      { 'year': '2003', 'type': 'NR', 'city': 'Sydney', 'against': 'West Indies', 'score': '140' },
    ],
  },
  {
    'id': 'ricky-ponting',
    'name': 'Ricky Ponting',
    'country': 'au',
    'birth': '1974',
    'image': 'ricky-ponting.jpg',
    'cover': 'ricky-ponting-cover.jpeg',
    'link': 'https://en.wikipedia.org/wiki/Ricky_Ponting',
    'centuries': [
      { 'year': '1994', 'type': 'W', 'city': 'Colombo', 'against': 'India', 'score': '110' },
      { 'year': '1994', 'type': 'W', 'city': 'Vadodara', 'against': 'New Zealand', 'score': '115' },
      { 'year': '1995', 'type': 'L', 'city': 'New Delhi', 'against': 'Sri Lanks', 'score': '137' },
      { 'year': '1996', 'type': 'W', 'city': 'Sharjah', 'against': 'Pakistan', 'score': '118' },
      { 'year': '1997', 'type': 'W', 'city': 'Hyderabd', 'against': 'South Africa', 'score': '101' },
      { 'year': '1998', 'type': 'NR', 'city': 'Sydney', 'against': 'India', 'score': '120' },
      { 'year': '1999', 'type': 'W', 'city': 'Colombo', 'against': 'India', 'score': '110' },
      { 'year': '1999', 'type': 'W', 'city': 'Vadodara', 'against': 'New Zealand', 'score': '115' },
      { 'year': '2000', 'type': 'L', 'city': 'New Delhi', 'against': 'Sri Lanks', 'score': '137' },
      { 'year': '2001', 'type': 'W', 'city': 'Sharjah', 'against': 'Pakistan', 'score': '118' },
      { 'year': '2002', 'type': 'W', 'city': 'Hyderabd', 'against': 'South Africa', 'score': '101' },
      { 'year': '2003', 'type': 'NR', 'city': 'Sydney', 'against': 'West Indies', 'score': '140' }
    ],
  },
  {
    'id': 'stephen-fleming',
    'name': 'Stephen Fleming',
    'country': 'nz',
    'birth': '1973',
    'image': 'stephen-fleming.jpg',
    'cover': 'stephen-fleming-cover.jpg',
    'link': 'https://en.wikipedia.org/wiki/Stephen_Fleming',
    'centuries': [
      { 'year': '1994', 'type': 'W', 'city': 'Colombo', 'against': 'India', 'score': '110' },
      { 'year': '1994', 'type': 'W', 'city': 'Vadodara', 'against': 'Australia', 'score': '115' },
      { 'year': '1995', 'type': 'L', 'city': 'New Delhi', 'against': 'Sri Lanks', 'score': '137' },
      { 'year': '1996', 'type': 'W', 'city': 'Sharjah', 'against': 'Pakistan', 'score': '118' },
      { 'year': '1997', 'type': 'W', 'city': 'Hyderabd', 'against': 'South Africa', 'score': '101' },
      { 'year': '1998', 'type': 'NR', 'city': 'Sydney', 'against': 'India', 'score': '120' },
      { 'year': '1999', 'type': 'W', 'city': 'Colombo', 'against': 'India', 'score': '110' },
      { 'year': '1999', 'type': 'W', 'city': 'Vadodara', 'against': 'Australia', 'score': '115' },
      { 'year': '2000', 'type': 'L', 'city': 'New Delhi', 'against': 'Sri Lanks', 'score': '137' },
      { 'year': '2001', 'type': 'W', 'city': 'Sharjah', 'against': 'Pakistan', 'score': '118' },
      { 'year': '2002', 'type': 'W', 'city': 'Hyderabd', 'against': 'South Africa', 'score': '101' },
      { 'year': '2003', 'type': 'NR', 'city': 'Sydney', 'against': 'West Indies', 'score': '140' }
    ],
  }
];

export default players;

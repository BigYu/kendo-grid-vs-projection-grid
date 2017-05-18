import _ from 'underscore';

const firstNames = ["Nancy", "Andrew", "Janet", "Margaret", "Steven", "Michael", "Robert", "Laura", "Anne", "Nige"];
const lastNames = ["Davolio", "Fuller", "Leverling", "Peacock", "Buchanan", "Suyama", "King", "Callahan", "Dodsworth", "White"];
const cities = ["Seattle", "Tacoma", "Kirkland", "Redmond", "London", "Philadelphia", "New York", "Seattle", "London", "Boston"];
const titles = ["Accountant", "Vice President, Sales", "Sales Representative", "Technical Support", "Sales Manager", "Web Designer",
    "Software Developer", "Inside Sales Coordinator", "Chief Techical Officer", "Chief Execute Officer"];

const generateData = function generateData(count, callback) {
  const data = _.map(_.range(count), (index) => ({
    Id: index,
    firstName: firstNames[Math.floor(Math.random() * firstNames.length)],
    lastName: lastNames[Math.floor(Math.random() * lastNames.length)],
    city: cities[Math.floor(Math.random() * cities.length)],
    title: titles[Math.floor(Math.random() * titles.length)],
  }));

  callback(data);
}

export default generateData;

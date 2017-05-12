import _ from 'underscore';

const data = _.map(_.range(500000), (index) => ({
  Id: index,
  name: `This is name ${index}`,
}));

export default data;

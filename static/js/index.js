import $ from 'jquery';
import pgrid from 'projection-grid';
import data from './data';
import '../styles/index.scss';

const columns = [
  {
    name: 'name',
    title: 'name',
    property: 'name',
  },
  {
    name: 'test2',
    title: 'test2',
    property: 'test2',
  },
];

const dataSource = {
  type: 'memory',
  data,
  primaryKey: 'Id',
};

const config = {
  el: $('.grid-container'),
  tableClasses: ['table', 'table-hover', 'grid'],
  scrolling: {
    virtualized: true,
    header: {
      type: 'sticky',
    },
  },
  columns,
  dataSource,
};

const grid = pgrid.factory({vnext: true})
  .create(config);

grid.gridView.render();

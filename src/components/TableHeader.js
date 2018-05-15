import React from 'react';

const TableHeader = props => (
  <thead {...props}>{props.children}</thead>
)

export default TableHeader;
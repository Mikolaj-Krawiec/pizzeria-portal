import React from 'react';
import PropTypes from 'prop-types';
import classes from './Kitchen.module.scss';

import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Button,
} from '@material-ui/core';
import { Accordion } from '@material-ui/core';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const demoKOntent = [
  {
    table: 'Table 1',
    phone: '+48 531 127 351',
    subtotalPrice: 47,
    totalPrice: 67,
    totalNumber: 4,
    deliveryFee: 20,
    products: [
      {
        id: 'pizza',
        amount: 1,
        price: 20,
        priceSingle: 20,
        params: {
          sauce: {
            label: 'Sauce',
            options: {
              cream: 'Sour cream',
            },
          },
          toppings: {
            label: 'Toppings',
            options: {
              olives: 'Olives',
              greenPeppers: 'Green peppers',
              mushrooms: 'Mushrooms',
              basil: 'Fresh basil',
            },
          },
          crust: {
            label: 'pizza crust',
            options: {
              standard: 'standard',
            },
          },
        },
      },
      {
        id: 'cake',
        amount: 3,
        price: 27,
        priceSingle: 9,
        params: {},
      },
    ],
    id: 1,
  },
];

const Kitchen = (props) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.component}>
      <Paper className={classes.component}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Table nr.</TableCell>
              <TableCell>Order details</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {demoKOntent.map((order) => (
              <TableRow key={order.id}>
                <TableCell component="th" scope="row">
                  {order.table}
                </TableCell>
                <TableCell>
                  {order.products.map((product) => {
                    const paramsAray = [];
                    for (const param in product.params) {
                      paramsAray.push(product.params[param]);
                    }
                    return (
                      <div key={product.id}>
                        <Accordion
                          expanded={expanded === product.id}
                          onChange={handleChange(product.id)}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                          >
                            <Typography className={classes.heading}>
                              {product.id}
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <div>
                              <Typography>amount: {product.amount}</Typography>
                              {paramsAray.map((param) => {
                                const options = [];
                                for (const option in param.options) {
                                  options.push(param.options[option]);
                                }
                                return (
                                  <Typography key={param.label}>
                                    {param.label} :{' '}
                                    {options.map((option) => (
                                      <span key={option} className={classes.option}>{option}</span>
                                    ))}
                                  </Typography>
                                );
                              })}
                            </div>
                          </AccordionDetails>
                        </Accordion>
                      </div>
                    );
                  })}
                </TableCell>
                <TableCell>
                  <Button>mark as <br/> completed</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

Kitchen.propTypes = {
  children: PropTypes.any,
};

export default Kitchen;

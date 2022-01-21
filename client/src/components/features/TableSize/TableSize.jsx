import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { useEffect } from "react";
import { UseMyContext } from "../../../Context";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import { Button, IconButton } from "@mui/material";

const TableSize = ({ size, dish }) => {
  const [total, setTotal] = useState(0);
  const dispatch = UseMyContext().dispatch
  const { dishes } = UseMyContext().state;
  console.log(dishes);
  useEffect(() => {
    size.map((size) =>
      size.items > 0 ? setTotal((total) => total + size.items * size.price) : ""
    );
  }, [dishes, size]);

  console.log(total);

  return (
    <TableContainer component={Paper} style={{ width: "100%" }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell size="small">Size</TableCell>
            <TableCell align="right" size="small">
              Items
            </TableCell>
            <TableCell align="right" size="small">
              Price
            </TableCell>
            <TableCell align="right" size="small"></TableCell>
            <TableCell align="right" size="small"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {size.map((size) =>
            size.items ? (
              <TableRow
                key={size.dishName}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" size="small">
                  {size.size}
                </TableCell>
                <TableCell size="small" align="right">
                  {size.items}
                </TableCell>
                <TableCell align="right" size="small">
                  {size.price * size.items}$
                </TableCell>
                <TableCell align="right" size="small">
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                    onClick={() =>
                      dispatch({
                        type: "addDish",
                        payload: { dish, size: size.size },
                      })
                    }
                  >
                    <AddOutlinedIcon style={{ fontSize: "15px" }} />
                  </IconButton>
                </TableCell>
                <TableCell align="right">
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                    onClick={() =>
                      dispatch({
                        type: "removeDish",
                        payload: { dish, size: size.size },
                      })
                    }
                  >
                    <RemoveOutlinedIcon style={{ fontSize: "15px" }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ) : (
              ""
            )
          )}
          Total: {total}$
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableSize;

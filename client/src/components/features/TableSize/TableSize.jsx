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
import { Button, IconButton, Typography } from "@mui/material";

const TableSize = ({ size, dish, matches }) => {
  const [total, setTotal] = useState(0);
  const dispatch = UseMyContext().dispatch;
  const { dishes } = UseMyContext().state;

  useEffect(() => {
    size.map((size) =>
      size.items > 0 ? setTotal((total) => size.items * size.price) : ""
    );
  }, [dishes, size]);
  let fontColor = `${matches ? "black" : "white"}`;

  return (
    <TableContainer
      component={Paper}
      style={{
        width: "100%",
        background: `${matches ? "#ffffff7a" : "rgb(0 0 0 / 41%)"}`,
        color: fontColor 
      }}
    >
      <Typography
        gutterBottom
        variant="h6"
        component="div"
        style={{ color: fontColor, fontWeight: 700 }}
      >
        {dish.dishesName}
      </Typography>

      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ color: fontColor }} size="small">
              Size
            </TableCell>
            <TableCell style={{ color: fontColor }} align="right" size="small">
              Items
            </TableCell>
            <TableCell style={{ color: fontColor }} align="right" size="small">
              Price
            </TableCell>
            <TableCell
              style={{ color: fontColor }}
              align="right"
              size="small"
            ></TableCell>
            <TableCell
              style={{ color: fontColor }}
              align="right"
              size="small"
            ></TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{ fontWeight: 900 }}>
          {size.map((size) =>
            size.items ? (
              <TableRow
                key={size.dishName}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  style={{ color: fontColor }}
                  component="th"
                  scope="row"
                  size="small"
                >
                  {size.size}
                </TableCell>
                <TableCell style={{ color: fontColor }} size="small" align="right">
                  {size.items}
                </TableCell>
                <TableCell style={{ color: fontColor }} align="right" size="small">
                  {size.price * size.items}$
                </TableCell>
                <TableCell style={{ color: fontColor }} align="right" size="small">
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
                <TableCell style={{ color: fontColor }} align="right">
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

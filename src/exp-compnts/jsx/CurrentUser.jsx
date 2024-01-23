import { Avatar, Chip, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../features/Login";

const CurrentUser = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const name = user.user || "IBTZ";
  // console.log(name);

  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch, fetchUser]);

  return (
    <Stack direction="row" spacing={3}>
      <Chip avatar={<Avatar>{name[0]}</Avatar>} label={name} color={ name === "IBTZ" ? 'error': 'success'} />
    </Stack>
  );
};

export default CurrentUser;

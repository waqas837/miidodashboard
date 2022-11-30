// @mui
import { styled } from "@mui/material/styles";
import { ListItemIcon, ListItemButton } from "@mui/material";

// ----------------------------------------------------------------------

export const StyledNavItem = styled((props) => (
  <ListItemButton disableGutters {...props} />
))(({ theme }) => ({
  ...theme.typography.body2,
  height: 48,
  position: "relative",
  textTransform: "capitalize",
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
  width: "279px",
}));

export const StyledNavItemIcon = styled(ListItemIcon)({
  width: 19,
  height: 19,
  color: "inherit",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

import React from "react";

import {
  Home,
  BusinessCenter,
  Business,
  Inbox,
  AccountCircle,
  SearchOutlined,
  Whatshot,
  ThumbUp,
  ArrowBackIos,
  Share,
  Check,
} from "@material-ui/icons";

function HomeIcon() {
  return <Home />;
}
function ProductIcon() {
  return <BusinessCenter />;
}
function PartnerIcon() {
  return <Business />;
}
function InboxIcon() {
  return <Inbox />;
}
function AccountIcon() {
  return <AccountCircle />;
}
function SearchIcon() {
  return <SearchOutlined />;
}
function FireIcon() {
  return <Whatshot />;
}
function ThumbUpIcon(props) {
  return <ThumbUp {...props} />;
}
function ArrowBackIcon(props) {
  return <ArrowBackIos {...props} />;
}
function ShareIcon(props) {
  return <Share {...props} />;
}
function CheckIcon(props) {
  return <Check {...props} />;
}

export {
  HomeIcon,
  ProductIcon,
  PartnerIcon,
  InboxIcon,
  AccountIcon,
  SearchIcon,
  FireIcon,
  ThumbUpIcon,
  ArrowBackIcon,
  ShareIcon,
  CheckIcon,
};

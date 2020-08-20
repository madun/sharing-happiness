import {
  HomeIcon,
  ProductIcon,
  PartnerIcon,
  InboxIcon,
  AccountIcon,
} from "../atoms/Icons";

export default function ItemNav(props) {
  return (
    <div
      {...props}
      className={`flex flex-grow cursor-pointer items-center justify-center p-2 hover:text-teal-400 ${props.activelink}`}
    >
      <div className="text-center">
        <span className="block h-8 text-3xl leading-8">
          {props.icon === "Home" && <HomeIcon />}
          {props.icon === "Product" && <ProductIcon />}
          {props.icon === "Partner" && <PartnerIcon />}
          {props.icon === "Inbox" && <InboxIcon />}
          {props.icon === "Account" && <AccountIcon />}
        </span>
        <span className="block text-xs leading-none">{props.label}</span>
      </div>
    </div>
  );
}

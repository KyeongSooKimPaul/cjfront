import React from "react";
import { Table, Media } from "reactstrap";
import SocialEmailTemplate from "./common/social-email-template";

const OrderSuccess = () => {
  return (
    <>
      <Table
        style={{ marginBottom: "0" }}
        borderless
        className="email-template-table"
        cellPadding="0"
        cellSpacing="0"
      >
        <tbody>
          <tr>
            <td>
              <Table align="center" border="0" cellPadding="0" cellSpacing="0">
                <tbody>
                  <tr>
                    <td>
                      <Media
                        className="email-media"
                        src={'/assets/images/email-temp/delivery.png'}
                        alt=""
                        style={{ marginBottom: "0" }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Media className="email-media" src={'/assets/images/email-temp/success.png'} alt="" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2 className="title">thank you</h2>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        Payment Is Successfully Processsed And Your Order Is On
                        The Way
                      </p>
                      <p>Transaction ID:267676GHERT105467</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div
                        style={{ borderTop: "1px solid #777", height: "1px" }}
                      ></div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Media
                        className="email-media"
                        src={'/assets/images/email-temp/order-success.png'}
                        alt=""
                      />
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Table border="0" cellPadding="0" cellSpacing="0">
                <tbody>
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <h2 className="title">YOUR ORDER DETAILS</h2>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Table
                className="order-detail"
                border="0"
                cellPadding="0"
                cellSpacing="0"
                align="left"
              >
                <tbody>
                  <tr className="email-tr">
                    <th>PRODUCT</th>
                    <th style={{ paddingLeft: "15px" }}>DESCRIPTION</th>
                    <th>QUANTITY</th>
                    <th>PRICE </th>
                  </tr>
                  <tr className="email-tr">
                    <td>
                      <Media
                        style={{ margin: "0 auto" }}
                        src={'/assets/images/email-temp/13.jpg'}
                        alt=""
                        width="70"
                      />
                    </td>
                    <td valign="top" style={{ paddingLeft: "15px" }}>
                      <h5 style={{ marginTop: "15px", textAlign: "left" }}>
                        Three seater Wood Style sofa for Leavingroom{" "}
                      </h5>
                    </td>
                    <td valign="top" style={{ paddingLeft: "0" }}>
                      <h5
                        style={{
                          fontSize: "14px",
                          color: "#444",
                          marginTop: "15px",
                          marginBottom: "0px",
                        }}
                      >
                        Size : <span> L</span>{" "}
                      </h5>
                      <h5
                        style={{
                          fontSize: "14px",
                          color: "#444",
                          marginTop: "0",
                        }}
                      >
                        QTY : <span>1</span>
                      </h5>
                    </td>
                    <td valign="top" style={{ paddingLeft: "15px" }}>
                      <h5
                        style={{
                          fontSize: "14px",
                          color: "#444",
                          marginTop: "15px",
                        }}
                      >
                        <b>$500</b>
                      </h5>
                    </td>
                  </tr>
                  <tr className="email-tr">
                    <td>
                      <Media
                        style={{ margin: "0 auto" }}
                        src={'/assets/images/email-temp/14.jpg'}
                        alt=""
                        width="70"
                      />
                    </td>
                    <td valign="top" style={{ paddingLeft: "15px" }}>
                      <h5 style={{ marginTop: "15px", textAlign: "left" }}>
                        Three seater Wood Style sofa for Leavingroom{" "}
                      </h5>
                    </td>
                    <td valign="top" style={{ paddingLeft: "0" }}>
                      <h5
                        style={{
                          fontSize: "14px",
                          color: "#444",
                          marginTop: "15px",
                          marginBottom: "0px",
                        }}
                      >
                        Size : <span> L</span>{" "}
                      </h5>
                      <h5
                        style={{
                          fontSize: "14px",
                          color: "#444",
                          marginTop: "0",
                        }}
                      >
                        QTY : <span>1</span>
                      </h5>
                    </td>
                    <td valign="top" style={{ paddingLeft: "15px" }}>
                      <h5
                        style={{
                          fontSize: "14px",
                          color: "#444",
                          marginTop: "15px",
                        }}
                      >
                        <b>$500</b>
                      </h5>
                    </td>
                  </tr>
                  <tr className="email-tr">
                    <td
                      colSpan="2"
                      style={{
                        lineHeight: "49px",
                        fontSize: "13px",
                        color: "#000000",
                        paddingLeft: "20px",
                        textAlign: "left",
                        borderRight: "unset",
                      }}
                    >
                      Products:
                    </td>
                    <td
                      colSpan="3"
                      className="price"
                      style={{
                        lineHeight: "49px",
                        textAlign: "right",
                        paddingRight: "28px",
                        fontSize: "13px",
                        color: "#000000",
                        borderLeft: "unset",
                      }}
                    >
                      <b>$2600.00</b>
                    </td>
                  </tr>
                  <tr className="email-tr">
                    <td
                      colSpan="2"
                      style={{
                        lineHeight: "49px",
                        fontSize: "13px",
                        color: "#000000",
                        paddingLeft: "20px",
                        textAlign: "left",
                        borderRight: "unset",
                      }}
                    >
                      Discount :
                    </td>
                    <td
                      colSpan="3"
                      className="price"
                      style={{
                        lineHeight: "49px",
                        textAlign: "right",
                        paddingRight: "28px",
                        fontSize: "13px",
                        color: "#000000",
                        borderLeft: "unset",
                      }}
                    >
                      <b>$10</b>
                    </td>
                  </tr>
                  <tr className="email-tr">
                    <td
                      colSpan="2"
                      style={{
                        lineHeight: "49px",
                        fontFamily: "Arial",
                        fontSize: "13px",
                        color: "#000000",
                        paddingLeft: "20px",
                        textAlign: "left",
                        borderRight: "unset",
                      }}
                    >
                      Gift Wripping:{" "}
                    </td>
                    <td
                      colSpan="3"
                      className="price"
                      style={{
                        lineHeight: "49px",
                        textAlign: "right",
                        paddingRight: "28px",
                        fontSize: "13px",
                        color: "#000000",
                        borderLeft: "unset",
                      }}
                    >
                      <b>$2600</b>
                    </td>
                  </tr>
                  <tr className="email-tr">
                    <td
                      colSpan="2"
                      style={{
                        lineHeight: "49px",
                        fontSize: "13px",
                        color: "#000000",
                        paddingLeft: "20px",
                        textAlign: "left",
                        borderRight: "unset",
                      }}
                    >
                      Shipping :
                    </td>
                    <td
                      colSpan="3"
                      className="price"
                      style={{
                        lineHeight: "49px",
                        textAlign: "right",
                        paddingRight: "28px",
                        fontSize: "13px",
                        color: "#000000",
                        borderLeft: "unset",
                      }}
                    >
                      <b>$30</b>
                    </td>
                  </tr>
                  <tr className="email-tr">
                    <td
                      colSpan="2"
                      style={{
                        lineHeight: "49px",
                        fontSize: "13px",
                        color: "#000000",
                        paddingLeft: "20px",
                        textAlign: "left",
                        borderRight: "unset",
                      }}
                    >
                      TOTAL PAID :
                    </td>
                    <td
                      colSpan="3"
                      className="price"
                      style={{
                        lineHeight: "49px",
                        textAlign: "right",
                        paddingRight: "28px",
                        fontSize: "13px",
                        color: "#000000",
                        textAlignLast: "right",
                        borderLeft: "unset",
                      }}
                    >
                      <b>$2600</b>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Table
                cellPadding="0"
                cellSpacing="0"
                border="0"
                align="left"
                style={{ width: "100%", marginTop: "0", marginBottom: "30px" }}
              >
                <tbody>
                  <tr>
                    <td
                      style={{
                        fontSize: "13px",
                        color: "#444444",
                        letterSpacing: "0.2px",
                        width: "50%",
                      }}
                    >
                      <h5
                        style={{
                          fontSize: "16px",
                          color: "#000",
                          lineHeight: "16px",
                          paddingBottom: "13px",
                          borderBottom: "1px solid #e6e8eb",
                          letterSpacing: "-0.65px",
                          marginTop: "0",
                          marginBottom: "13px",
                          textAlign: "left",
                        }}
                      >
                        DILIVERY ADDRESS
                      </h5>
                      <p
                        style={{
                          textAlign: "left",
                          fontWeight: "normal",
                          fontSize: "14px",
                          color: "#000000",
                          lineHeight: "21px",
                          marginTop: "0",
                        }}
                      >
                        268 Cambridge Lane New Albany, IN 47150268 Cambridge
                        Lane <br />
                        New Albany, IN 47150
                      </p>
                    </td>
                    <td className="user-info">
                      <Media src={'/assets/images/email-temp/space.jpg'} alt=" " height="25" width="57" />
                    </td>
                    <td
                      className="user-info"
                      style={{
                        fontSize: "13px",
                        color: "#444444",
                        letterSpacing: "0.2px",
                        width: "50%",
                      }}
                    >
                      <h5
                        style={{
                          fontSize: "16px",
                          color: "#000",
                          lineHeight: "16px",
                          paddingBottom: "13px",
                          borderBottom: "1px solid #e6e8eb",
                          letterSpacing: "-0.65px",
                          marginTop: "0",
                          marginBottom: "13px",
                          textAlign: "left",
                        }}
                      >
                        SHIPPING ADDRESS
                      </h5>
                      <p
                        style={{
                          textAlign: "left",
                          fontWeight: "normal",
                          fontSize: "14px",
                          color: "#000000",
                          lineHeight: "21px",
                          marginTop: "0",
                        }}
                      >
                        268 Cambridge Lane New Albany, IN 47150268 Cambridge
                        Lane <br />
                        New Albany, IN 47150
                      </p>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </td>
          </tr>
        </tbody>
      </Table>
      <SocialEmailTemplate />
      <style global jsx>
        {`
          body {
            text-align: center;
            margin: 30px auto;
            width: 650px;
            font-family: "Open Sans", sans-serif;
            background-color: #e2e2e2;
            display: block;
          }
          .email-template-table {
            padding: 0 30px;
            background-color: #ffffff;
            box-shadow: 0px 0px 14px -4px rgba(0, 0, 0, 0.2705882353);
            width: 100%;
          }
          .email-tr {
            border-top: 1px solid #ddd;
            border-bottom: 1px solid #ddd;
          }
          .email-media {
            margin-top: 30px;
            display: inline;
          }
          .title {
            color: #444444;
            font-size: 22px;
            font-weight: bold;
            padding-bottom: 0;
            text-transform: uppercase;
            display: inline-block;
            line-height: 1;
          }

          table.order-detail,
          .order-detail th,
          .order-detail td {
            border: 1px solid #ddd;
            border-collapse: collapse;
            padding: 0;
          }

          .order-detail th {
            font-size: 16px;
            padding: 15px;
            text-align: center;
          }
        `}
      </style>
    </>
  );
};

export default OrderSuccess;

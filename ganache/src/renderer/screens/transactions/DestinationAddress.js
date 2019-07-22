import React, { Component } from "react";
import { toChecksumAddress } from "../../../helpers/checksumAddress";

export default class DestinationAddress extends Component {
  render() {
    const isContractCall =
      (this.props.receipt.hasOwnProperty("contractAddress") &&
        this.props.receipt.contractAddress !== null) ||
      (this.props.tx.to && this.props.tx.input);

    const isContractCreationCall =
      this.props.receipt.hasOwnProperty("contractAddress") &&
      this.props.receipt.contractAddress !== null;

    return (
      <div className="DestinationAddress">
        <div className="Label">
          {isContractCreationCall
            ? "CREATED CONTRACT ADDRESS"
            : isContractCall
            ? `TO CONTRACT ADDRESS`
            : `TO ADDRESS`}
        </div>
        <div className="Value">
          {isContractCreationCall ? (
            <div className="ContractCreationAddress">
              <span>
                {toChecksumAddress(this.props.receipt.contractAddress)}
              </span>
            </div>
          ) : (
            <div>
              {this.props.contractName || toChecksumAddress(this.props.tx.to)}
            </div>
          )}
        </div>
      </div>
    );
  }
}

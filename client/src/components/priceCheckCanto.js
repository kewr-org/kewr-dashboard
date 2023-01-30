import React from 'react'

function PriceCheckCanto(props) {
  return (
    <tr>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    4
                                </th>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                app.slingshot.finance
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    Weth : {props.dataCantoWeth}
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    Usdc : {props.dataCantoUsdc} ││ Usdt : {props.dataCantoUsdt}
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    Canto : {props.dataCanto}
                                </td>
                            </tr>
  )
}

export default PriceCheckCanto
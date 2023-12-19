import { v4 as uuidv4 } from 'uuid';
import { MsgPopcodeMintEncodeObject } from '../../index';
/**
 *   This is used to structure payload for minting popcode
 *
 * @param dlpcSetup - DLPC setup information including organization and user details.
 *
 * @returns A promise that resolves to `popcode_mint` which is a structured message object for minting popcode.
 *
 * @throws Will throw an error if the Axios API call fails.
 *
 * @remarks
 * - The function retrieves and parses the DLPC document from the provided setup.
 * - Then it prepares hash for particular message and data required to be signed.
 * - It then makes an API call to signHandler and extracts signatureInfo.
 * - The function then prepares the claim authorize document, envelope and other details.
 * - Finally, it structures the final message object for authorizing claim and returns it.
 */

export const prepareMintTx = async (getData: any, mintData: any, popcodeAddress: any, location: { latitude: any, longitude: any }): Promise<any> => {
  try {
    if (!popcodeAddress) {
      throw new Error('popcode address is undefined');
    }

    const asset = {
      SkuName: mintData.skuName,
      SkuAmount: mintData.skuAmount,
      SkuUom: mintData.skuUom,
    };


    const template = JSON.parse(getData.template);


    const fieldsRes: any = {};
    template.mint?.events[0]?.fields.forEach((item: any) => {
      if (item.varName) {
        fieldsRes[item.varName] = item.valueType
      }
    });

    const t = Date.now().toString();
    const ts = t.toString();


    const transformedData = template.mint?.events[0]?.abac?.map((item: any) => {
      const policyId = uuidv4().toString();
      const conditionSet = [
        {
          Attribute: item.attribute,
          Value: [item.value],
          Operation: 'IS',
        },
      ];
      const effect = item.permission.charAt(0).toUpperCase() + item.permission.slice(1);

      return {
        PolicyID: policyId,
        ConditionSet: conditionSet,
        Effect: effect,
      };
    });

    const Mint: any = {
      label: template.mint?.events[0]?.label,
      fields: fieldsRes,
      Constraints: template.mint?.events[0]?.constraints,
      ABAC: transformedData,
    };

    const metadata: any = {
      Event: template.mint?.events[0]?.label,
      Actor: '',
      timestamp: ts,
      gpsLocation: {
        latitude: location.latitude,
        longitude: location.longitude,
      },
      popcodeURL: popcodeAddress,
      templateName: template.templateName,
      templateCategory: template.category,
      templateIcon: template.iconSrc
    };
    const counterTx: any = {
      Address: popcodeAddress.split('/')[6],
      Counter: uuidv4(),
      PrevCounter: '',
      Document: JSON.stringify({ Asset: asset, Events: { Mint: Mint } }),
      EventData: JSON.stringify({ Metadata: metadata, Data: mintData }),
    };

    const mintPopcodeMsgEnvelope = {
      EventName: 'popcode_mint',
      EncryptedFields: true,
      SenderOrg: getData?.orgInfo?.data?.organization?.address,
      Metadata: 'metadata',
      ChainId: getData?.chainData?.chainId || '',
      TxType: getData?.channelIdCc ? 'IBC' : 'direct',
      ReceiverOrg: "",
      TimeoutTimestamp: ts
    };

    const mintPopcodeMsg: any = {
      CounterTx: counterTx,
      Envelope: mintPopcodeMsgEnvelope,
      Version: '2.1',
      Creator: ''
    };

    const mintPopcodeMsgObj: MsgPopcodeMintEncodeObject = {
      typeUrl: '/trade.track.MsgPopcodeMint',
      value: mintPopcodeMsg
    };
    return { message: mintPopcodeMsgObj };
  } catch (err) {
    throw err;
  }
};

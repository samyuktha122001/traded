import { getTimeStamp } from '../../utils/utils';
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

export const prepareMintTx = async (getData: any): Promise<any> => {
  try {
    const actions = getData.template;

    const mintPopcodeEventData = {
      metadata: {
        popcodeUri: '',
        timestamp: getTimeStamp(),
        gpsLocation: {
          latitude: '',
          longitude: ''
        }
      },
      step: {
        name: 'Mint Popcode',
        fields: {
          skuAmount: getData?.asset?.Amount,
          skuName: getData?.asset?.Name,
          skuUom: getData?.asset?.UnitOfMeasure
        }
      }
    };

    const counterTx: any = {
      Address: uuidv4(),
      Counter: uuidv4(),
      PrevCounter: '',
      Document: JSON.stringify({ asset: getData?.asset, actions: actions }),
      EventData: JSON.stringify({ ...mintPopcodeEventData })
    };

    const mintPopcodeMsgEnvelope = {
      EventName: 'popcode_mint',
      EncryptedFields: true,
      SenderOrg: getData?.orgInfo?.data?.organization?.address,
      Metadata: 'metadata',
      ChainId: getData?.chainData?.chainId || '',
      TxType: getData?.channelIdCc ? 'IBC' : 'direct'
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

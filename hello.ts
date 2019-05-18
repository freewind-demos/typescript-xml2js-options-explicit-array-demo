import {parseString, Builder} from 'xml2js';

function parseXmlToObject(xml: string, explicitArray: boolean): any {
  let result = null;
  parseString(xml, {explicitArray}, (err, _result) => {
    result = _result
  })
  return result;
}

function buildObjectToXml(obj: any, explicitArray: boolean): string {
  const builder = new Builder({explicitArray})
  const xml = builder.buildObject(obj)
  return xml;
}

function parseAndBuild(xml: string, explicitArray: boolean) {
  const obj = parseXmlToObject(xml, explicitArray);
  const builtXml = buildObjectToXml(obj, explicitArray)

  console.log('obj: ', JSON.stringify(obj, null, 4));
  console.log('builtXml: ', builtXml)
}

const xml = `<?xml version="1.0" encoding="utf-16"?>
<SearchReport>
    <DisplayFields>
        <DisplayField>21234</DisplayField>
        <DisplayField>21230</DisplayField>
        <DisplayField>21241</DisplayField>
        <DisplayField>21249</DisplayField>
        <DisplayField>21263</DisplayField>
        <DisplayField>21264</DisplayField>
        <DisplayField>21244</DisplayField>
        <DisplayField>21245</DisplayField>
        <DisplayField>25998</DisplayField>
        <DisplayField>21236</DisplayField>
        <DisplayField>21262</DisplayField>
    </DisplayFields>
    <PageSize>50</PageSize>
</SearchReport>
`;

console.log('--------- parseAndBuild: true --------------')
parseAndBuild(xml, true);

console.log('--------- parseAndBuild: false --------------')
parseAndBuild(xml, false);

import React, { useState, useEffect } from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import axios from 'axios';

// 도봉구 샘플
function Powerbitest() {

  const [accessToken, setAccessToken] = useState('');

  // Azure AD에서 새 토큰 가져오는 함수
  const fetchAccessToken = async () => {
    const requestBody = {
      client_id: '4c1198d2-dc4c-4e6e-8778-83b304707b8f',
      client_secret: 'T7d8Q~VJk4A1Tt2d30D6oxBcrN3WGLuBZwrL.cVG',
      grant_type: 'client_credentials',
      scope: 'https://analysis.windows.net/powerbi/api/.default'
    };

    const azureADTokenUrl = 'https://login.microsoftonline.com/309ce0af-f6ce-405d-82ef-c58f0e4351af/oauth2/v2.0/token';

    try {
      const response = await axios.post(azureADTokenUrl, requestBody);
      const newAccessToken = response.data.access_token;
      setAccessToken(newAccessToken);
    } catch (error) {
      console.error('토큰을 받는 동안 에러 발생:', error);
    }
  };

  useEffect(() => {
    fetchAccessToken(); // 컴포넌트가 로드될 때 토큰을 가져오도록 설정
  }, []);


  return (
    <div>
      <PowerBIEmbed
        embedConfig={{
          type: 'report', // 보고서 타입
          id: '88a88bf8-ce06-4688-a9f5-7a1bda12e1a6',
          embedUrl:"https://app.powerbi.com/reportEmbed?reportId=88a88bf8-ce06-4688-a9f5-7a1bda12e1a6&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUtPUkVBLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19",
          accessToken:accessToken,
          tokenType: models.TokenType.Aad,
          settings: {
            panes: {
              filters: {
                expanded: false,
                visible: false
              }
            },
            background: models.BackgroundType.Transparent,
          }
        }}


      eventHandlers={
        new Map([
          ['loaded', function () { console.log('Report loaded'); }],
          ['rendered', function () { console.log('Report rendered'); }],
          ['error', function (event) { console.log(event.detail); }],
          ['visualClicked', (event) => {
            const visualData = event.detail;
            console.log('Visual Clicked:', visualData)
          }],
          ['pageChanged', (event) => console.log(event)],
        ])
      }

      cssClassName={"embededReport"}
      getEmbeddedComponent={(embeddedReport) => {
        window.report = embeddedReport;
      }}
      />
    </div>
  )
}

export default Powerbitest
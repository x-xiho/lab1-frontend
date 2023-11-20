import React from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

// 도봉구 샘플
function PowerBI() {


  return (
    <div>
      <PowerBIEmbed
        embedConfig={{
          type: 'report', // 보고서 타입
          id: 'ab7c83b3-1781-491e-9989-baf22a7653fd',
          embedUrl:"https://app.powerbi.com/reportEmbed?reportId=ab7c83b3-1781-491e-9989-baf22a7653fd&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUVBU1QtQVNJQS1BLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7InVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlfX0%3d",
          accessToken:"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSIsImtpZCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZmQwOWIyYmMtOTIyMC00YzZiLTgzNzItMjIwYjdiZDUxODE5LyIsImlhdCI6MTcwMDQ1NjQwNSwibmJmIjoxNzAwNDU2NDA1LCJleHAiOjE3MDA0NjE1NDEsImFjY3QiOjAsImFjciI6IjEiLCJhZ2VHcm91cCI6IjQiLCJhaW8iOiJBVFFBeS84VkFBQUFPeHJBM2ZmYjVtUWJndlVuNGdJUVVyMWRuWE5KTEFlZ1RQUnZUTXRKK3Q3R0JVN2FGREwzbHd4VVFQV0hzbjFDIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiS2ltIiwiZ2l2ZW5fbmFtZSI6IkppaG8iLCJpcGFkZHIiOiIyMDMuMjUyLjIyMy4yNTMiLCJuYW1lIjoiS2ltSmlobyIsIm9pZCI6IjFjNzQ2N2E0LTFiMzItNGIyNS1hNmIxLTA2NTE1ODhlNTAzYSIsInB1aWQiOiIxMDAzMjAwMDQ5MDM2QzZGIiwicmgiOiIwLkFYRUF2TElKX1NDU2EweURjaUlMZTlVWUdRa0FBQUFBQUFBQXdBQUFBQUFBQUFCeEFNVS4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzaWduaW5fc3RhdGUiOlsia21zaSJdLCJzdWIiOiJwVnc3ZUdxbWFvY1RxWXlfRlF0YWFlSWdvd0M4c1lKVTJvRFB0MjBVdVZrIiwidGlkIjoiZmQwOWIyYmMtOTIyMC00YzZiLTgzNzItMjIwYjdiZDUxODE5IiwidW5pcXVlX25hbWUiOiJrb25nODhAZHVrc3VuZy5hYy5rciIsInVwbiI6Imtvbmc4OEBkdWtzdW5nLmFjLmtyIiwidXRpIjoibDlHdlFXbjdaRWE1THVmcHJLZWtBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19wbCI6ImtvLUtSIn0.wRSBYUOxEuFNhf0qczMvvJhyRHUPguBnyB8K6RGFfwl5-ddi25EC-wcvQzeP1kHr-4Kbf3dzwhsilTzGLFF2HriKmmOUehvOZbNmnwRjJ3l1HyUkYs0mJTvZHV_F67YPc5QimhckWHyLTFJgXKs_iSJf1fPqnG5SjQqzcrRrH9zmm-27cb7wrrCkFT4kyJYLhr5nyy7JRU_Y2eSb-sFy1Oze9bV0rf3sbZlDe45LsENySsV4JVL4smKTbNhTKUtcnOOyApnVAiSm6rY2m3BkU_MX_MnSZeA3oumU9VUlB5eeAJE2VfpvwCoEcuuuh-pGppMcAzfojbMwz26rFBe8fA",
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

export default PowerBI
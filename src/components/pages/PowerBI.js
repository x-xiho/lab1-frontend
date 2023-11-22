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
          id: '88a88bf8-ce06-4688-a9f5-7a1bda12e1a6',
          // id: 'ab7c83b3-1781-491e-9989-baf22a7653fd',
          embedUrl:"https://app.powerbi.com/reportEmbed?reportId=88a88bf8-ce06-4688-a9f5-7a1bda12e1a6&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUtPUkVBLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19",
          // embedUrl:"https://app.powerbi.com/reportEmbed?reportId=ab7c83b3-1781-491e-9989-baf22a7653fd&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUVBU1QtQVNJQS1BLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7InVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlfX0%3d",
          accessToken:"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSIsImtpZCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMzA5Y2UwYWYtZjZjZS00MDVkLTgyZWYtYzU4ZjBlNDM1MWFmLyIsImlhdCI6MTcwMDYyNjg5NiwibmJmIjoxNzAwNjI2ODk2LCJleHAiOjE3MDA2MzE0MzYsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84VkFBQUFiYVcxaHVqOGhzcFJMS0RZeXJaSUZqTWdHejE4NHloUVYxSUZJbkNZdjFNWHpzQ2tFVjk5eWkxOXlrSlRUdVdrOEJRdE52K1JXL1RGdHZBak0vZzBSNHhITy85RWt0OTNGQTM2VXNKOSt5az0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiODcxYzAxMGYtNWU2MS00ZmIxLTgzYWMtOTg2MTBhN2U5MTEwIiwiYXBwaWRhY3IiOiIwIiwiaXBhZGRyIjoiMjIxLjE1NC4yNC44MSIsIm5hbWUiOiJraWJ3YTIzXzAxIiwib2lkIjoiZjkyZWFiZGMtMmNlZi00N2Y1LWE3YzUtMzU1MjIxZTRiMDMxIiwicHVpZCI6IjEwMDMyMDAyQzUwMTAzRkUiLCJyaCI6IjAuQVZZQXItQ2NNTTcyWFVDQzc4V1BEa05ScndrQUFBQUFBQUFBd0FBQUFBQUFBQUNmQUpvLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6InlXU1Z0a2FtUWk3VEtqdC1ta1AtbUZJVTBQNllXU2poc21CU0NYSGFMdUEiLCJ0aWQiOiIzMDljZTBhZi1mNmNlLTQwNWQtODJlZi1jNThmMGU0MzUxYWYiLCJ1bmlxdWVfbmFtZSI6ImtpYndhMjNfMDFAa2lid2FhaXN3Lm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6ImtpYndhMjNfMDFAa2lid2FhaXN3Lm9ubWljcm9zb2Z0LmNvbSIsInV0aSI6IlZpWDY5cmp5N2stejBCY3l0d1BOQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.qXyyQIwlc9vcl3qBCM0lsyq8_dsh05y6JCt63oZ4WONs-WR779MrLv36MEJaFb8obNbf9CAgENNDYENPt_NWooHKujSOEB7xoyski4dRz2ig62c1t9W_CDGWAPOmtvpbbLEol-Vs_4MdTXALGRBi4MXZ76Sr8MzVZy_KCGheefqcdb-koA0imtPX01zw__S1-lLyTiZXz3zhTRAG2OWLlXOPpWq3507ubbLD6rVusHZZnF9TqF1uwpckXQ_C3bawW1E8bhhD3653y8-EI1kiFhRNfvBc3H7nkhiSAJeAYNPqFTARa080PpU2jiYKPsp3NcFhymfMUTyWet_7O2FWOg",
          // accessToken:"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSIsImtpZCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZmQwOWIyYmMtOTIyMC00YzZiLTgzNzItMjIwYjdiZDUxODE5LyIsImlhdCI6MTcwMDQ1NjQwNSwibmJmIjoxNzAwNDU2NDA1LCJleHAiOjE3MDA0NjE1NDEsImFjY3QiOjAsImFjciI6IjEiLCJhZ2VHcm91cCI6IjQiLCJhaW8iOiJBVFFBeS84VkFBQUFPeHJBM2ZmYjVtUWJndlVuNGdJUVVyMWRuWE5KTEFlZ1RQUnZUTXRKK3Q3R0JVN2FGREwzbHd4VVFQV0hzbjFDIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiS2ltIiwiZ2l2ZW5fbmFtZSI6IkppaG8iLCJpcGFkZHIiOiIyMDMuMjUyLjIyMy4yNTMiLCJuYW1lIjoiS2ltSmlobyIsIm9pZCI6IjFjNzQ2N2E0LTFiMzItNGIyNS1hNmIxLTA2NTE1ODhlNTAzYSIsInB1aWQiOiIxMDAzMjAwMDQ5MDM2QzZGIiwicmgiOiIwLkFYRUF2TElKX1NDU2EweURjaUlMZTlVWUdRa0FBQUFBQUFBQXdBQUFBQUFBQUFCeEFNVS4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzaWduaW5fc3RhdGUiOlsia21zaSJdLCJzdWIiOiJwVnc3ZUdxbWFvY1RxWXlfRlF0YWFlSWdvd0M4c1lKVTJvRFB0MjBVdVZrIiwidGlkIjoiZmQwOWIyYmMtOTIyMC00YzZiLTgzNzItMjIwYjdiZDUxODE5IiwidW5pcXVlX25hbWUiOiJrb25nODhAZHVrc3VuZy5hYy5rciIsInVwbiI6Imtvbmc4OEBkdWtzdW5nLmFjLmtyIiwidXRpIjoibDlHdlFXbjdaRWE1THVmcHJLZWtBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19wbCI6ImtvLUtSIn0.wRSBYUOxEuFNhf0qczMvvJhyRHUPguBnyB8K6RGFfwl5-ddi25EC-wcvQzeP1kHr-4Kbf3dzwhsilTzGLFF2HriKmmOUehvOZbNmnwRjJ3l1HyUkYs0mJTvZHV_F67YPc5QimhckWHyLTFJgXKs_iSJf1fPqnG5SjQqzcrRrH9zmm-27cb7wrrCkFT4kyJYLhr5nyy7JRU_Y2eSb-sFy1Oze9bV0rf3sbZlDe45LsENySsV4JVL4smKTbNhTKUtcnOOyApnVAiSm6rY2m3BkU_MX_MnSZeA3oumU9VUlB5eeAJE2VfpvwCoEcuuuh-pGppMcAzfojbMwz26rFBe8fA",
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
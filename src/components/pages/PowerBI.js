import React from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

// 도봉구 샘플
function PowerBI() {
  
  const requestBody = {
    username: "kibwa23_01@kibwaaisw.onmicrosoft.com",
    roles: [
      "Viewer"
    ]
  };
  
  const tokenRequestUrl = 'https://api.powerbi.com/v1.0/myorg/groups/f2b70bfb-8415-4d39-9862-0684567bf136/reports/88a88bf8-ce06-4688-a9f5-7a1bda12e1a6/GenerateToken';
  
  axios.post(tokenRequestUrl, requestBody)
    .then(response => {
      // 요청 성공 시 처리
      console.log('토큰을 성공적으로 받았습니다:', response.data);
      // 받은 토큰을 처리하는 로직 추가
    })
    .catch(error => {
      // 요청 실패 시 처리
      console.error('토큰을 받는 동안 에러 발생nn:', error);
    });

  return (
    <div>
      <PowerBIEmbed
        embedConfig={{
          type: 'report', // 보고서 타입
          id: '88a88bf8-ce06-4688-a9f5-7a1bda12e1a6',
          // id: 'ab7c83b3-1781-491e-9989-baf22a7653fd',
          embedUrl:"https://app.powerbi.com/reportEmbed?reportId=88a88bf8-ce06-4688-a9f5-7a1bda12e1a6&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUtPUkVBLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19",
          // embedUrl:"https://app.powerbi.com/reportEmbed?reportId=ab7c83b3-1781-491e-9989-baf22a7653fd&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUVBU1QtQVNJQS1BLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7InVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlfX0%3d",
          accessToken:"H4sIAAAAAAAEAB1XtRLsSBL8l-fqIsR0EWuIYcQsecIRM2_cv9_sut1pZVVC_f3HSp9-Sos___3TXl1zYUVnu0VMOipxqSuzuk4_ND5hAUOC6nphjng6iEzmNWu7xxcOSV-FtW8x81kZAkUCY2bRWqmtOzZs0vzqswSREglvBG3zDU_5TqvAk3F2fnpLv25-NeW5TZZ3zEYVdSmJR_JSMunTO9KHpdubY10yXq1XIQl96X6c9EnTLaAVqcnl_gju_qbQxoNGF94cIDeKSea8Kx6aoJi9OiAKTxTF6y7rXGfw-AoxDxxMJUe9MNTBjzHBK71ggijpBU2yBGlgOJVamtYOtcsrr5JfV3PUHXWtKs18KRu5jjhZshSp8EGcU6OIp0k-Cs8LS8wbOrSJywKdHKxZTwt0wl3cXLWIjAr_ekFccMCzjNak2EcLg_OHThaTlecDwYy6JEbRCA2AxlznB9mEMHTFPQA96NbaLgTpxLUNqNH5JaLMwFIPVUBfRtvXeKJagUSnvpxFaQXIh1pDnK6e5T7nSQqD-xO0MUVq8b5pXTHO8GMQJoe9e1zFqPro-KoAKTL0mUKU4xK-CBrkHhS4_avdqsOs2OKcEVDWKXCHwrNTBP32pkKXSJxc4JTJYZ6xBTNhYV6IMA_hfdN8H_UkS3B5dNVBliWFxUJlY-driur-VDtg6LmrlrO7j98e2BL8Qqs-6MR1_LSM3GJfa3YhK8_O652bMLmVAs-uw2gSTa0SNTEYISc-t9d3RRwXBZRtI758Ton9koJoBz4205XyRsvU4yPjxbRa4-w-ol1MkqWKcmPd3b4u6rmut0InlxAAEBuknIjMhWRIZ8GVP93HuF7AlnlpHTQP-_xW1bp5-Vya5-l6bkCR7QEJapcHNwXWiZa2oY4-SZgCEWdHa5OKbVI6fvuoq377hJS-1VEqAnE1cYj6PZ_cz9e6TmJuc7iVMfyQazXktRH9XrMBMUPyW06OVyFOcDwGBRF1wfnegZLiHgk_UX189S8Er3k0ceLYcAcpCoWf_u4NLCJkK5-YSJlbIcvBkSdFTmRkDIqVPA5G8TgmBnbmmaRFJtcf-5GY8FJRucKhR9LyvjvEo6VGip6tKE2oxgd_yepBSDk4ExxPtxBSFo2xyGCfKEGNA0SDxvqM98SklPZG5xHjPaSi0lns4os7cU2tbsg7KrAil-_RxCf0DTKYzRz18ftQju6Fl4vN_dqZZ6ZCymE-z2-9ZPdrKjLN7BbaTwCZRYt74qcTZ7o0bqRurkDcEljIbJ2v6_UI68WMAhxCmydyIe7WG-pFOxx4awgIQfcKTdLAhcS7KcrOJCXrABDvHI03Sn7zi-YjpXh7ZP2cQ6v1ceG-qtRqiRvfhiaiUMZy9AHI091cOswad09Ok2PlNKwLskqiZ5gnNfqOr6oQX2gehKRobO6eeWcAT92f7OgmzTgi3FbPji0dsIDQU21OaCqRHq5exZ007Q2FOk1wKUeseOEUxeKVfScIEsIuHTf3CZ-yMq0kLztkTGSH5K6NkFg7RX8nT-FuJEMa7unkrh5Kdkf-LohXYkCmc-aF4lNbEvcqS5XL00stfkje3q1YjrAYpOzFlPCatJBijWJnuYlwkGPXliTvTYFDdJJFVoZawB_uvaWShE_KjRvOf9vf63C--F7rv6_GEiizYbxb5BfMNPLNf7J5ojZL7o2aW5LIZxHOnmE8CUT_GaiXuLQ7g7hZH7pcW35q3dR5JNv42mfti7zfOMRrjsXXs-Z2MBpw8ed5_Q3tNybIiUOyjou9j_xFh4NmwkU_GBDVgIzqBIAQbBwuJkmprtS03sV89BXYWdRAdK7kW-s5d3pMYpAB47n6SYM2xGQTIvETDVPrxh75PVgFzklcKDxiDG6wmEhxGb-pwmW_TIyKgCrJJ37ut8THarAaL4uOLphmQFBn34oBfO8l0ukY5EdOhRWhZ5O1wRQIbWTwR6zJ9OisiXLcsrbU6J2kMbBey03ped6Xw1oGzEBiYxcuV0Sa4QKPtRVniHfSm0AYuRzN9zNS30gnCto5bJ7tClWdkIeLa2c36y2p3nvNTabonNCi2DGg_dEQjyE9bC1t6REf8r7ksFRWOx3n3NkFUL2-ZgIEhA6DB6SpqN_wng9ide9WWXk40d4iMFz7SZjUFCfOmGyEwObXH--F2j0hE1sCjs-Hcxcng6-smp7CJuUFcz7aRBzXjoeqdU3Lo6GQj5jGZ2qqbJgvbH19tfX5-soCi4y-lqFitM2PSP2mGfoYXxdkgyiQTXVqXP5p4iA3hM_N7GDaNJT_HiTxrTTNR1FYhXB3G-6xnUn4yPRuMs2teW2qcsmmd4vrIyvKeqRN_NQxcYAjVxvrFw8jj2Ob3tw-8eXaONd8u6Mke1S44Kx6cxaLUXQ_znHoDkx0vUZLzT4c3hGy1QbWOogpbrILUyQdlWb8ajhIXAxYLgy33jvAxMxO1BScB5J0EUn9aYsbh0WDx1l1I9d1eW46b7XPD0FlptgporrEJ_7p5bQMnuPrzZ-GCJkZlyEPg48bUV9sLssKausnHsez2Tru8tZUeL85dEY_i9FQR74rNG7yistOPLPTJJ1CWO2sXILgPFeFbZYoCP5FdefmghU9Mg8HMs1KmvFhutobqaz6858_3PrM-_Qpn18dfNnNWmbK-RxZ0U5yzwPwREkP2go8JaETKoPBN7K0JUUOiiFSoOfRNlF6juCRUht2bUD4syzNq6K6CIQNwSijqz3SU2so3ii6eiUp9vGXXY0fPj2Ttr0Pm24bdOS-4DgmF1wQaFLnxIGFkIl42ziI35mGSQ-GSfBCkbfZGF-KVl1s6OXAaHLbGYgof8bQ-05DUs-U1YOkFbk-Rh6_nANld4vs7e0sjXhjQa0OCAWfZBaTf3ZH15zGGan7CaSvb26vnue_fF2JN2tShHbWa0KBWPRePtdMcR_b9lxlShFoG7JF9i05p55fiL9YE4OMVKntQK_XnzPSAaZHcp45_qPIR6ddf_31D83PXJerEvxYjmPKU6yPU-mZ350dyCO76TD_otzmO6b7sZY_GB_iG-E66rdp9qyoK4r4iD7zy11Guvdb__xK9M4-_I0DatXHdFjlPU4MT4_yH81QbrkDyISaBgUQyJPFu9asah7YVKJ6qpOP2_luUmxBC5kvNJqYHnD41MmI3kym8LO6duehoIWzeEtDV7-t3HVlHLT-BXEUQB22XJHGrRI8vColFdm1wxcT65BiyLdfO_ksfQM_qcnLMcPDLDsKu8oC041EdOp9X_w3WgJV5b406bjpaDOrBBZsHDC9AGi_UgyLd-qaHNCuBClEllr_ZbEHCk6NIV429csnf5nXCLWdv0DtdxGYRujO_YYHtak_J-vgHUROZ6PF3wN9dIzFm0dzlNR2L_tH8__-D6bYv8QCDQAA.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUtPUkVBLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZXhwIjoxNzAwNzM3NzM2LCJhbGxvd0FjY2Vzc092ZXJQdWJsaWNJbnRlcm5ldCI6dHJ1ZX0=",
          // accessToken:"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSIsImtpZCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZmQwOWIyYmMtOTIyMC00YzZiLTgzNzItMjIwYjdiZDUxODE5LyIsImlhdCI6MTcwMDQ1NjQwNSwibmJmIjoxNzAwNDU2NDA1LCJleHAiOjE3MDA0NjE1NDEsImFjY3QiOjAsImFjciI6IjEiLCJhZ2VHcm91cCI6IjQiLCJhaW8iOiJBVFFBeS84VkFBQUFPeHJBM2ZmYjVtUWJndlVuNGdJUVVyMWRuWE5KTEFlZ1RQUnZUTXRKK3Q3R0JVN2FGREwzbHd4VVFQV0hzbjFDIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiS2ltIiwiZ2l2ZW5fbmFtZSI6IkppaG8iLCJpcGFkZHIiOiIyMDMuMjUyLjIyMy4yNTMiLCJuYW1lIjoiS2ltSmlobyIsIm9pZCI6IjFjNzQ2N2E0LTFiMzItNGIyNS1hNmIxLTA2NTE1ODhlNTAzYSIsInB1aWQiOiIxMDAzMjAwMDQ5MDM2QzZGIiwicmgiOiIwLkFYRUF2TElKX1NDU2EweURjaUlMZTlVWUdRa0FBQUFBQUFBQXdBQUFBQUFBQUFCeEFNVS4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzaWduaW5fc3RhdGUiOlsia21zaSJdLCJzdWIiOiJwVnc3ZUdxbWFvY1RxWXlfRlF0YWFlSWdvd0M4c1lKVTJvRFB0MjBVdVZrIiwidGlkIjoiZmQwOWIyYmMtOTIyMC00YzZiLTgzNzItMjIwYjdiZDUxODE5IiwidW5pcXVlX25hbWUiOiJrb25nODhAZHVrc3VuZy5hYy5rciIsInVwbiI6Imtvbmc4OEBkdWtzdW5nLmFjLmtyIiwidXRpIjoibDlHdlFXbjdaRWE1THVmcHJLZWtBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19wbCI6ImtvLUtSIn0.wRSBYUOxEuFNhf0qczMvvJhyRHUPguBnyB8K6RGFfwl5-ddi25EC-wcvQzeP1kHr-4Kbf3dzwhsilTzGLFF2HriKmmOUehvOZbNmnwRjJ3l1HyUkYs0mJTvZHV_F67YPc5QimhckWHyLTFJgXKs_iSJf1fPqnG5SjQqzcrRrH9zmm-27cb7wrrCkFT4kyJYLhr5nyy7JRU_Y2eSb-sFy1Oze9bV0rf3sbZlDe45LsENySsV4JVL4smKTbNhTKUtcnOOyApnVAiSm6rY2m3BkU_MX_MnSZeA3oumU9VUlB5eeAJE2VfpvwCoEcuuuh-pGppMcAzfojbMwz26rFBe8fA",
          tokenType: models.TokenType.Embed,
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
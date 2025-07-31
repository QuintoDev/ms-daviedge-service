import { handlerChat } from './src/controllers/chatController.mjs'

export const handler = async (event) => {
  const response = await handlerChat(JSON.parse(event.body));

  console.log('Response:', response);

  return {
    statusCode: 200,
    body: JSON.stringify({
      text: response
    })
  };
}

handler({
  version: '2.0',
  routeKey: 'POST /question',
  rawPath: '/question',
  rawQueryString: '',
  headers: {
    'accept-encoding': 'gzip, deflate, br',
    authorization: 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImRkNTMwMTIwNGZjMWQ2YTBkNjhjNzgzYTM1Y2M5YzEwYjI1ZTFmNGEiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJodHRwczovL2Y0OW5pMXo0djUuZXhlY3V0ZS1hcGkudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vcXVlc3Rpb24iLCJhenAiOiIxMDYzNTIwNDM4OTk0Mzc1MjM0MDciLCJlbWFpbCI6ImNoYXRAc3lzdGVtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZXhwIjoxNzUzOTIyNzU0LCJpYXQiOjE3NTM5MTkxNTQsImlzcyI6Imh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbSIsInN1YiI6IjEwNjM1MjA0Mzg5OTQzNzUyMzQwNyJ9.DeIjTetWoMG-FwxrEEVzI-1KXUYvMH5ofXxfJR1QlMApc1Zz46vtdQLA1U03LpqSdx9mVe59IthmAUah1WFpz7D2uat4dwUa2-gwTC0tlOUE5fcXhhysnGPr7xCKeSVobEvvhxtPeF8JgMetjqwYQufRtLnvuPvsOdRd8u4s7iW6LBUxLaUSAn7WgJ_ItEWRAfLp-lcmgCrrz-sfe2DjmPZWTtMKXMFoOVSzStg5GgdYpZlXi6dm_RJCrQwr7HIBnhInDUpqQt2adj45ZQktWdBYZsFEcI7TabImlmCpRUhCUx4NMuO_ZHs-CnTOWoySIwvbF_JBoCDg1Km81RZWXQ',
    'content-length': '3125',
    'content-type': 'application/json; charset=utf-8',
    from: '',
    host: 'f49ni1z4v5.execute-api.us-east-1.amazonaws.com',
    'user-agent': 'Google-Dynamite',
    'x-amzn-trace-id': 'Root=1-688aaeb2-308dc5fd6436d9a5718e5308',
    'x-forwarded-for': '74.125.212.128',
    'x-forwarded-port': '443',
    'x-forwarded-proto': 'https'
  },
  requestContext: {
    accountId: '093521229683',
    apiId: 'f49ni1z4v5',
    domainName: 'f49ni1z4v5.execute-api.us-east-1.amazonaws.com',
    domainPrefix: 'f49ni1z4v5',
    http: {
      method: 'POST',
      path: '/question',
      protocol: 'HTTP/1.1',
      sourceIp: '74.125.212.128',
      userAgent: 'Google-Dynamite'
    },
    requestId: 'OjA77hvOoAMEJxw=',
    routeKey: 'POST /question',
    stage: '$default',
    time: '30/Jul/2025:23:45:54 +0000',
    timeEpoch: 1753919154327
  },
    body: '{\n' +
    '  "type": "MESSAGE",\n' +
    '  "eventTime": "2025-07-31T02:30:03.356207Z",\n' +
    '  "message": {\n' +
    '    "name": "spaces/AAAAPhMsFf0/messages/OWWb-Wuhtxg.OWWb-Wuhtxg",\n' +
    '    "sender": {\n' +
    '      "name": "users/109378185192163901427",\n' +
    '      "displayName": "Fanor Hernan Quintero Atara",\n' +
    '      "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocKqh-tNA2B5w5Yn63FLEpV_OjtwSGxvOQ-iK2NxYMox2kxzGA\\u003dk-no",\n' +
    '      "email": "fanor.quintero@davivienda.com",\n' +
    '      "type": "HUMAN",\n' +
    '      "domainId": "33ylmlo"\n' +
    '    },\n' +
    '    "createTime": "2025-07-31T02:30:03.356207Z",\n' +
    '    "text": "/daviedge /daviedge -----BEGIN CERTIFICATE-----\\nMIIHbTCCBlWgAwIBAgITawAAFMzSw4sJV3OX0QADAAAUzDANBgkqhkiG9w0BAQsF\\nADCB0TELMAkGA1UEBhMCQ08xEzARBgoJkiaJk/IsZAEZFgNsb2MxGjAYBgoJkiaJ\\nk/IsZAEZFgpkYXZpdmllbmRhMRMwEQYDVQQIEwpCb2dvdGEgRC5DMRMwEQYDVQQH\\nEwpCb2dvdGEgRC5DMR0wGwYDVQQKExRCYW5jbyBEYXZpdmllbmRhIFMuQTEkMCIG\\nA1UECxMbQWRtaW5pc3RyYWNpb24gU2VndXJpZGFkIFRJMSIwIAYDVQQDExlDQSBT\\ndWJvcmRpbmFkYSBEQVZJVklFTkRBMB4XDTI0MDgwMjIxMTkzMVoXDTI1MDgwMjIx\\nMTkzMVowgZwxCzAJBgNVBAYTAkNPMRUwEwYDVQQIEwxDdW5kaW5hbWFyY2ExDzAN\\nBgNVBAcTBkJvZ290YTEeMBwGA1UEChMVQkFOQ08gREFWSVZJRU5EQSBTLkEuMRIw\\nEAYDVQQLEwlEYXZpcGxhdGExMTAvBgNVBAMTKHByb2QtYmFja2VuZC1kYXZpcGxh\\ndGEtMjQuZGF2aXZpZW5kYS5sb2MwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEK\\nAoIBAQDBpEialjmUcEiDGMwsInb+Ngn9JFdRlr4yZjatXWM9LuHwPwcifuC6yQpQ\\nj5C1vmCwSLQwbTCCbncB8QtOMFXZHZRQCcSf7WnMrSh41vzKjcnRMKWvSYW2xL+8\\nTWuM+xiqS1VJpnELNPnr1gPTwnz8e767AvG43wjRD+0uB4ObO2cAoS7L68viv7ys\\nKP7+8WBo04s/PQgwKE/qb/4Nsz54NPvJJ9Wd104shJKIlKOICmVvPm3ex3IQvEkV\\nkCfVHmWI4VxZaUwtz/cEfcps5226R3gHa4pA8Uz6QUZ2Ci7HVOv+PWI4Fels8jxb\\n2cEtrh3NCjuE4dfGxcxLjoc2Qz7pAgMBAAGjggNvMIIDazAdBgNVHQ4EFgQUI1nH\\ntQJSuky35inBCBqSr08PY3AwHwYDVR0jBBgwFoAUTDM68rbt6E71xnYs4uzGOpfh\\nCuMwggE8BgNVHR8EggEzMIIBLzCCASugggEnoIIBI4aBz2xkYXA6Ly8vQ049Q0El\\nMjBTdWJvcmRpbmFkYSUyMERBVklWSUVOREEsQ049U0FER1ZDQUlOVERBVjAyLENO\\nPUNEUCxDTj1QdWJsaWMlMjBLZXklMjBTZXJ2aWNlcyxDTj1TZXJ2aWNlcyxDTj1D\\nb25maWd1cmF0aW9uLERDPWRhdml2aWVuZGEsREM9bG9jP2NlcnRpZmljYXRlUmV2\\nb2NhdGlvbkxpc3Q/YmFzZT9vYmplY3RDbGFzcz1jUkxEaXN0cmlidXRpb25Qb2lu\\ndIZPaHR0cDovL2NhZGF2aXZpZW5kYS5kYXZpdmllbmRhLmxvYy9DZXJ0RW5yb2xs\\nL0NBJTIwU3Vib3JkaW5hZGElMjBEQVZJVklFTkRBLmNybDCCAVMGCCsGAQUFBwEB\\nBIIBRTCCAUEwgb8GCCsGAQUFBzAChoGybGRhcDovLy9DTj1DQSUyMFN1Ym9yZGlu\\nYWRhJTIwREFWSVZJRU5EQSxDTj1BSUEsQ049UHVibGljJTIwS2V5JTIwU2Vydmlj\\nZXMsQ049U2VydmljZXMsQ049Q29uZmlndXJhdGlvbixEQz1kYXZpdmllbmRhLERD\\nPWxvYz9jQUNlcnRpZmljYXRlP2Jhc2U/b2JqZWN0Q2xhc3M9Y2VydGlmaWNhdGlv\\nbkF1dGhvcml0eTB9BggrBgEFBQcwAoZxaHR0cDovL2NhZGF2aXZpZW5kYS5kYXZp\\ndmllbmRhLmxvYy9DZXJ0RW5yb2xsL1NBREdWQ0FJTlREQVYwMi5kYXZpdmllbmRh\\nLmxvY19DQSUyMFN1Ym9yZGluYWRhJTIwREFWSVZJRU5EQSgzKS5jcnQwCwYDVR0P\\nBAQDAgTwMD0GCSsGAQQBgjcVBwQwMC4GJisGAQQBgjcVCIP6uH+DueVGhaWBH4Tb\\n+X6DjfYoDYLtmDGDtNQgAgFkAgECMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEF\\nBQcDAjAnBgkrBgEEAYI3FQoEGjAYMAoGCCsGAQUFBwMBMAoGCCsGAQUFBwMCMA0G\\nCSqGSIb3DQEBCwUAA4IBAQDSkbZwdxx/ta8fEsMF/ZfphcJ6BBOTxYrpUcjaixqx\\nGOyi2Fu7RClXLOGNE3BATOdC/PLyxI7Jd+Vjlbyd7KngP3sxFgYnzSG4zODLSn+u\\n1qJSgXpFaeXPPE8NY5kHoACEajnkVcpe7lKFpvi7ySkkMdTCHUnlK28wUnQ5WHPI\\nzCMqJYs3ZZRTozzE/G+hZ3my+eN0p6iJZhcuuCbLyUe4fnCD7zTCHU4AAh4qBpMU\\n+qXFnxsHiFv4gYprxOClJyZvI6uOfGjzxZcKzU0aGpl6V4+83GaRKROIPrRp5MT/\\nPdnadUzsGSpMXXqDUcc0cjJVsXadXlQBe2sXNen+v+P4\\n-----END CERTIFICATE-----",\n' +
    '    "annotations": [{\n' +
    '      "type": "SLASH_COMMAND",\n' +
    '      "startIndex": 0,\n' +
    '      "length": 9,\n' +
    '      "slashCommand": {\n' +
    '        "bot": {\n' +
    '          "name": "users/102165629683576637421",\n' +
    '          "displayName": "DaviEdge",\n' +
    '          "avatarUrl": "https://lh4.googleusercontent.com/proxy/VKEqkUiCfghwukKieolEPvhV_JQi-CKcLKbwvkPpVD1hIphvARLoQz3SWf_hviNx_zgbku-EUayeFyFAaQWrhUcaVp0QLhkqkPxcCg",\n' +
    '          "type": "BOT"\n' +
    '        },\n' +
    '        "type": "INVOKE",\n' +
    '        "commandName": "/daviedge",\n' +
    '        "commandId": "1"\n' +
    '      }\n' +
    '    }],\n' +
    '    "thread": {\n' +
    '      "name": "spaces/AAAAPhMsFf0/threads/OWWb-Wuhtxg",\n' +
    '      "retentionSettings": {\n' +
    '        "state": "PERMANENT"\n' +
    '      }\n' +
    '    },\n' +
    '    "space": {\n' +
    '      "name": "spaces/AAAAPhMsFf0",\n' +
    '      "type": "ROOM",\n' +
    '      "displayName": "FHQUINTE",\n' +
    '      "spaceThreadingState": "THREADED_MESSAGES",\n' +
    '      "spaceType": "SPACE",\n' +
    '      "spaceHistoryState": "HISTORY_ON",\n' +
    '      "lastActiveTime": "2025-07-31T02:29:00.601103Z",\n' +
    '      "membershipCount": {\n' +
    '        "joinedDirectHumanUserCount": 1\n' +
    '      },\n' +
    '      "spaceUri": "https://chat.google.com/room/AAAAPhMsFf0?cls\\u003d11"\n' +
    '    },\n' +
    '    "argumentText": " /daviedge -----BEGIN CERTIFICATE-----\\\\nADCB0TELMAkGA1UEBhMCQ08xEzARBgoJkiaJk/IsZAEZFgNsb2MxGjAYBgoJkiaJ\\nk/IsZAEZFgpkYXZpdmllbmRhMRMwEQYDVQQIEwpCb2dvdGEgRC5DMRMwEQYDVQQH\\nEwpCb2dvdGEgRC5DMR0wGwYDVQQKExRCYW5jbyBEYXZpdmllbmRhIFMuQTEkMCIG\\nA1UECxMbQWRtaW5pc3RyYWNpb24gU2VndXJpZGFkIFRJMSIwIAYDVQQDExlDQSBT\\ndWJvcmRpbmFkYSBEQVZJVklFTkRBMB4XDTI0MDgwMjIxMTkzMVoXDTI1MDgwMjIx\\nMTkzMVowgZwxCzAJBgNVBAYTAkNPMRUwEwYDVQQIEwxDdW5kaW5hbWFyY2ExDzAN\\nBgNVBAcTBkJvZ290YTEeMBwGA1UEChMVQkFOQ08gREFWSVZJRU5EQSBTLkEuMRIw\\nEAYDVQQLEwlEYXZpcGxhdGExMTAvBgNVBAMTKHByb2QtYmFja2VuZC1kYXZpcGxh\\ndGEtMjQuZGF2aXZpZW5kYS5sb2MwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEK\\nAoIBAQDBpEialjmUcEiDGMwsInb+Ngn9JFdRlr4yZjatXWM9LuHwPwcifuC6yQpQ\\nj5C1vmCwSLQwbTCCbncB8QtOMFXZHZRQCcSf7WnMrSh41vzKjcnRMKWvSYW2xL+8\\nTWuM+xiqS1VJpnELNPnr1gPTwnz8e767AvG43wjRD+0uB4ObO2cAoS7L68viv7ys\\nKP7+8WBo04s/PQgwKE/qb/4Nsz54NPvJJ9Wd104shJKIlKOICmVvPm3ex3IQvEkV\\nkCfVHmWI4VxZaUwtz/cEfcps5226R3gHa4pA8Uz6QUZ2Ci7HVOv+PWI4Fels8jxb\\n2cEtrh3NCjuE4dfGxcxLjoc2Qz7pAgMBAAGjggNvMIIDazAdBgNVHQ4EFgQUI1nH\\ntQJSuky35inBCBqSr08PY3AwHwYDVR0jBBgwFoAUTDM68rbt6E71xnYs4uzGOpfh\\nCuMwggE8BgNVHR8EggEzMIIBLzCCASugggEnoIIBI4aBz2xkYXA6Ly8vQ049Q0El\\nMjBTdWJvcmRpbmFkYSUyMERBVklWSUVOREEsQ049U0FER1ZDQUlOVERBVjAyLENO\\nPUNEUCxDTj1QdWJsaWMlMjBLZXklMjBTZXJ2aWNlcyxDTj1TZXJ2aWNlcyxDTj1D\\nb25maWd1cmF0aW9uLERDPWRhdml2aWVuZGEsREM9bG9jP2NlcnRpZmljYXRlUmV2\\nb2NhdGlvbkxpc3Q/YmFzZT9vYmplY3RDbGFzcz1jUkxEaXN0cmlidXRpb25Qb2lu\\ndIZPaHR0cDovL2NhZGF2aXZpZW5kYS5kYXZpdmllbmRhLmxvYy9DZXJ0RW5yb2xs\\nL0NBJTIwU3Vib3JkaW5hZGElMjBEQVZJVklFTkRBLmNybDCCAVMGCCsGAQUFBwEB\\nBIIBRTCCAUEwgb8GCCsGAQUFBzAChoGybGRhcDovLy9DTj1DQSUyMFN1Ym9yZGlu\\nYWRhJTIwREFWSVZJRU5EQSxDTj1BSUEsQ049UHVibGljJTIwS2V5JTIwU2Vydmlj\\nZXMsQ049U2VydmljZXMsQ049Q29uZmlndXJhdGlvbixEQz1kYXZpdmllbmRhLERD\\nPWxvYz9jQUNlcnRpZmljYXRlP2Jhc2U/b2JqZWN0Q2xhc3M9Y2VydGlmaWNhdGlv\\nbkF1dGhvcml0eTB9BggrBgEFBQcwAoZxaHR0cDovL2NhZGF2aXZpZW5kYS5kYXZp\\ndmllbmRhLmxvYy9DZXJ0RW5yb2xsL1NBREdWQ0FJTlREQVYwMi5kYXZpdmllbmRh\\nLmxvY19DQSUyMFN1Ym9yZGluYWRhJTIwREFWSVZJRU5EQSgzKS5jcnQwCwYDVR0P\\nBAQDAgTwMD0GCSsGAQQBgjcVBwQwMC4GJisGAQQBgjcVCIP6uH+DueVGhaWBH4Tb\\n+X6DjfYoDYLtmDGDtNQgAgFkAgECMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEF\\nBQcDAjAnBgkrBgEEAYI3FQoEGjAYMAoGCCsGAQUFBwMBMAoGCCsGAQUFBwMCMA0G\\nCSqGSIb3DQEBCwUAA4IBAQDSkbZwdxx/ta8fEsMF/ZfphcJ6BBOTxYrpUcjaixqx\\nGOyi2Fu7RClXLOGNE3BATOdC/PLyxI7Jd+Vjlbyd7KngP3sxFgYnzSG4zODLSn+u\\n1qJSgXpFaeXPPE8NY5kHoACEajnkVcpe7lKFpvi7ySkkMdTCHUnlK28wUnQ5WHPI\\nzCMqJYs3ZZRTozzE/G+hZ3my+eN0p6iJZhcuuCbLyUe4fnCD7zTCHU4AAh4qBpMU\\n+qXFnxsHiFv4gYprxOClJyZvI6uOfGjzxZcKzU0aGpl6V4+83GaRKROIPrRp5MT/\\nPdnadUzsGSpMXXqDUcc0cjJVsXadXlQBe2sXNen+v+P4\\n-----END CERTIFICATE-----",\n' +
    '    "slashCommand": {\n' +
    '      "commandId": "1"\n' +
    '    },\n' +
    '    "retentionSettings": {\n' +
    '      "state": "PERMANENT"\n' +
    '    },\n' +
    '    "messageHistoryState": "HISTORY_ON",\n' +
    '    "formattedText": "/daviedge /daviedge -----BEGIN CERTIFICATE-----\\nMIIHbTCCBlWgAwIBAgITawAAFMzSw4sJV3OX0QADAAAUzDANBgkqhkiG9w0BAQsF\\nADCB0TELMAkGA1UEBhMCQ08xEzARBgoJkiaJk/IsZAEZFgNsb2MxGjAYBgoJkiaJ\\nk/IsZAEZFgpkYXZpdmllbmRhMRMwEQYDVQQIEwpCb2dvdGEgRC5DMRMwEQYDVQQH\\nEwpCb2dvdGEgRC5DMR0wGwYDVQQKExRCYW5jbyBEYXZpdmllbmRhIFMuQTEkMCIG\\nA1UECxMbQWRtaW5pc3RyYWNpb24gU2VndXJpZGFkIFRJMSIwIAYDVQQDExlDQSBT\\ndWJvcmRpbmFkYSBEQVZJVklFTkRBMB4XDTI0MDgwMjIxMTkzMVoXDTI1MDgwMjIx\\nMTkzMVowgZwxCzAJBgNVBAYTAkNPMRUwEwYDVQQIEwxDdW5kaW5hbWFyY2ExDzAN\\nBgNVBAcTBkJvZ290YTEeMBwGA1UEChMVQkFOQ08gREFWSVZJRU5EQSBTLkEuMRIw\\nEAYDVQQLEwlEYXZpcGxhdGExMTAvBgNVBAMTKHByb2QtYmFja2VuZC1kYXZpcGxh\\ndGEtMjQuZGF2aXZpZW5kYS5sb2MwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEK\\nAoIBAQDBpEialjmUcEiDGMwsInb+Ngn9JFdRlr4yZjatXWM9LuHwPwcifuC6yQpQ\\nj5C1vmCwSLQwbTCCbncB8QtOMFXZHZRQCcSf7WnMrSh41vzKjcnRMKWvSYW2xL+8\\nTWuM+xiqS1VJpnELNPnr1gPTwnz8e767AvG43wjRD+0uB4ObO2cAoS7L68viv7ys\\nKP7+8WBo04s/PQgwKE/qb/4Nsz54NPvJJ9Wd104shJKIlKOICmVvPm3ex3IQvEkV\\nkCfVHmWI4VxZaUwtz/cEfcps5226R3gHa4pA8Uz6QUZ2Ci7HVOv+PWI4Fels8jxb\\n2cEtrh3NCjuE4dfGxcxLjoc2Qz7pAgMBAAGjggNvMIIDazAdBgNVHQ4EFgQUI1nH\\ntQJSuky35inBCBqSr08PY3AwHwYDVR0jBBgwFoAUTDM68rbt6E71xnYs4uzGOpfh\\nCuMwggE8BgNVHR8EggEzMIIBLzCCASugggEnoIIBI4aBz2xkYXA6Ly8vQ049Q0El\\nMjBTdWJvcmRpbmFkYSUyMERBVklWSUVOREEsQ049U0FER1ZDQUlOVERBVjAyLENO\\nPUNEUCxDTj1QdWJsaWMlMjBLZXklMjBTZXJ2aWNlcyxDTj1TZXJ2aWNlcyxDTj1D\\nb25maWd1cmF0aW9uLERDPWRhdml2aWVuZGEsREM9bG9jP2NlcnRpZmljYXRlUmV2\\nb2NhdGlvbkxpc3Q/YmFzZT9vYmplY3RDbGFzcz1jUkxEaXN0cmlidXRpb25Qb2lu\\ndIZPaHR0cDovL2NhZGF2aXZpZW5kYS5kYXZpdmllbmRhLmxvYy9DZXJ0RW5yb2xs\\nL0NBJTIwU3Vib3JkaW5hZGElMjBEQVZJVklFTkRBLmNybDCCAVMGCCsGAQUFBwEB\\nBIIBRTCCAUEwgb8GCCsGAQUFBzAChoGybGRhcDovLy9DTj1DQSUyMFN1Ym9yZGlu\\nYWRhJTIwREFWSVZJRU5EQSxDTj1BSUEsQ049UHVibGljJTIwS2V5JTIwU2Vydmlj\\nZXMsQ049U2VydmljZXMsQ049Q29uZmlndXJhdGlvbixEQz1kYXZpdmllbmRhLERD\\nPWxvYz9jQUNlcnRpZmljYXRlP2Jhc2U/b2JqZWN0Q2xhc3M9Y2VydGlmaWNhdGlv\\nbkF1dGhvcml0eTB9BggrBgEFBQcwAoZxaHR0cDovL2NhZGF2aXZpZW5kYS5kYXZp\\ndmllbmRhLmxvYy9DZXJ0RW5yb2xsL1NBREdWQ0FJTlREQVYwMi5kYXZpdmllbmRh\\nLmxvY19DQSUyMFN1Ym9yZGluYWRhJTIwREFWSVZJRU5EQSgzKS5jcnQwCwYDVR0P\\nBAQDAgTwMD0GCSsGAQQBgjcVBwQwMC4GJisGAQQBgjcVCIP6uH+DueVGhaWBH4Tb\\n+X6DjfYoDYLtmDGDtNQgAgFkAgECMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEF\\nBQcDAjAnBgkrBgEEAYI3FQoEGjAYMAoGCCsGAQUFBwMBMAoGCCsGAQUFBwMCMA0G\\nCSqGSIb3DQEBCwUAA4IBAQDSkbZwdxx/ta8fEsMF/ZfphcJ6BBOTxYrpUcjaixqx\\nGOyi2Fu7RClXLOGNE3BATOdC/PLyxI7Jd+Vjlbyd7KngP3sxFgYnzSG4zODLSn+u\\n1qJSgXpFaeXPPE8NY5kHoACEajnkVcpe7lKFpvi7ySkkMdTCHUnlK28wUnQ5WHPI\\nzCMqJYs3ZZRTozzE/G+hZ3my+eN0p6iJZhcuuCbLyUe4fnCD7zTCHU4AAh4qBpMU\\n+qXFnxsHiFv4gYprxOClJyZvI6uOfGjzxZcKzU0aGpl6V4+83GaRKROIPrRp5MT/\\nPdnadUzsGSpMXXqDUcc0cjJVsXadXlQBe2sXNen+v+P4\\n-----END CERTIFICATE-----"\n' +
    '  },\n' +
    '  "user": {\n' +
    '    "name": "users/109378185192163901427",\n' +
    '    "displayName": "Fanor Hernan Quintero Atara",\n' +
    '    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocKqh-tNA2B5w5Yn63FLEpV_OjtwSGxvOQ-iK2NxYMox2kxzGA\\u003dk-no",\n' +
    '    "email": "fanor.quintero@davivienda.com",\n' +
    '    "type": "HUMAN",\n' +
    '    "domainId": "33ylmlo"\n' +
    '  },\n' +
    '  "space": {\n' +
    '    "name": "spaces/AAAAPhMsFf0",\n' +
    '    "type": "ROOM",\n' +
    '    "displayName": "FHQUINTE",\n' +
    '    "spaceThreadingState": "THREADED_MESSAGES",\n' +
    '    "spaceType": "SPACE",\n' +
    '    "spaceHistoryState": "HISTORY_ON",\n' +
    '    "lastActiveTime": "2025-07-30T22:11:07.686863Z",\n' +
    '    "membershipCount": {\n' +
    '      "joinedDirectHumanUserCount": 1\n' +
    '    },\n' +
    '    "spaceUri": "https://chat.google.com/room/AAAAPhMsFf0?cls\\u003d11"\n' +
    '  },\n' +
    '  "configCompleteRedirectUrl": "https://chat.google.com/api/bot_config_complete?token\\u003dAGSmvGMbo-8ctQVgUXWbk9cLqtbocnbLHy1esQZWONDKFTOBX-lHirZzyPoTtOmHSv-Q7MnH1nUcnaHR9Mx6gyEnvrmPWbsQRQp1aL6Cd2nqkSETnvm-eE_tvze6yh9BR-bSZMGJtdwBb-Rr1ROB9kSdaA%3D%3D",\n' +
    '  "common": {\n' +
    '    "userLocale": "es",\n' +
    '    "hostApp": "CHAT"\n' +
    '  },\n' +
    '  "appCommandMetadata": {\n' +
    '    "appCommandId": 1,\n' +
    '    "appCommandType": "SLASH_COMMAND"\n' +
    '  },\n' +
    '  "thread": {\n' +
    '    "name": "spaces/AAAAPhMsFf0/threads/rgZDSQeIfE8"\n' +
    '  }\n' +
    '}',
  isBase64Encoded: false
})
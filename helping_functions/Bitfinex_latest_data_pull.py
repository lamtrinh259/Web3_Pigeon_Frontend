import requests

url = "https://api-pub.bitfinex.com/v2/tickers?symbols=tBTCUSD"

headers = {"accept": "application/json"}

response = requests.get(url, headers=headers)

print(response.text)

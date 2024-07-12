<script>
  import "../app.css";
  import Offerbox from "./Offerbox.svelte";
  // COPY OF DATA [PART] RETRIEVED FROM GOOGLE HOTEL API
  const tempData = {
    properties: [
      {
        type: "hotel",
        name: "Flying Pig Downtown",
        description:
          "Eenvoudig hostel met slaapzalen en privékamers, een levendige bar, een rookruimte en gratis ontbijt.",
        link: "https://www.st-christophers.co.uk/amsterdam/downtown-hostel",
        gps_coordinates: {
          latitude: 52.3767957,
          longitude: 4.8960715,
        },
        check_in_time: "14:00",
        check_out_time: "11:00",
        rate_per_night: {
          lowest: "€ 91",
          extracted_lowest: 91,
          before_taxes_fees: "€ 74",
          extracted_before_taxes_fees: 74,
        },
        total_rate: {
          lowest: "€ 91",
          extracted_lowest: 91,
          before_taxes_fees: "€ 74",
          extracted_before_taxes_fees: 74,
        },
        nearby_places: [
          {
            name: "Amsterdam Centraal",
            transportations: [
              {
                type: "Walking",
                duration: "5 min",
              },
            ],
          },
          {
            name: "Schiphol Amsterdam Airport",
            transportations: [
              {
                type: "Public transport",
                duration: "23 min",
              },
              {
                type: "Taxi",
                duration: "28 min",
              },
            ],
          },
          {
            name: "Gió Cucina Italiana",
            transportations: [
              {
                type: "Walking",
                duration: "1 min",
              },
            ],
          },
        ],
        images: [
          {
            thumbnail:
              "https://lh5.googleusercontent.com/p/AF1QipMlFwQrHnxdQlQAPJ108GUqzFwrhHQRKqZ8E-af=s287-w287-h192-n-k-no-v1",
            original_image:
              "https://lh5.googleusercontent.com/p/AF1QipMlFwQrHnxdQlQAPJ108GUqzFwrhHQRKqZ8E-af=s10000",
          },
          {
            thumbnail:
              "https://lh5.googleusercontent.com/p/AF1QipN0wgJQxSGGlp413iRIgMN8HdyqOjC8iQzMh6q0=s287-w287-h192-n-k-no-v1",
            original_image:
              "https://lh5.googleusercontent.com/p/AF1QipN0wgJQxSGGlp413iRIgMN8HdyqOjC8iQzMh6q0=s10000",
          },
          {
            thumbnail:
              "https://lh3.googleusercontent.com/proxy/TJmgifBpecF87N_6nR5CxbnEKdjFPKR4gYKEhmf-N5gkzkVdZZRDkBFlLXUpsa1OhB3We7TmSUfgVIh9Ej6Dyt7KW71FSIgmp6KCa_Q6I8xqLxcgKA9kSjZ3luGkR-xllU_GsitzjbbEHSJvYBhMZo0UkjIwde8=s287-w287-h192-n-k-no-v1",
            original_image:
              "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/6e/bc/99/flying-pig-downtown.jpg?w=2100&h=1400&s=1",
          },
          {
            thumbnail:
              "https://lh5.googleusercontent.com/p/AF1QipNPbCW5KeR39GPqNszj7snZzIMkgdj35rskBpRM=s287-w287-h192-n-k-no-v1",
            original_image:
              "https://lh5.googleusercontent.com/p/AF1QipNPbCW5KeR39GPqNszj7snZzIMkgdj35rskBpRM=s10000",
          },
          {
            thumbnail:
              "https://lh5.googleusercontent.com/p/AF1QipNPFL17dTSspD2dkAGRZEhJeRVXYCyuWeyIaP1w=s287-w287-h192-n-k-no-v1",
            original_image:
              "https://lh5.googleusercontent.com/p/AF1QipNPFL17dTSspD2dkAGRZEhJeRVXYCyuWeyIaP1w=s10000",
          },
          {
            thumbnail:
              "https://lh5.googleusercontent.com/p/AF1QipOiuBqW-yE-4PQiaHfh7HoDTw4SvNuffC4E2cvf=s287-w287-h192-n-k-no-v1",
            original_image:
              "https://lh5.googleusercontent.com/p/AF1QipOiuBqW-yE-4PQiaHfh7HoDTw4SvNuffC4E2cvf=s10000",
          },
          {
            thumbnail:
              "https://lh5.googleusercontent.com/p/AF1QipNcWheIb-VmqUe1NYtQkY7OXLTK0lqS90WYo5M9=s287-w287-h192-n-k-no-v1",
            original_image:
              "https://lh5.googleusercontent.com/p/AF1QipNcWheIb-VmqUe1NYtQkY7OXLTK0lqS90WYo5M9=s10000",
          },
          {
            thumbnail:
              "https://lh4.googleusercontent.com/proxy/JMbH6Bc01U9CALE5CpgCsd20S6YbZzINFnfj5n2sWuun2d4YtnLaFi6S3ercrSj8jXvF3Gymv1MMizkgvZdXBf5vjb_Ee1JYbZcFoOgqtgFWswITKYveTfT7o3japhtDVXkSmeS-2D0y0GDeTS5AeKEg3cJUEA=s287-w287-h192-n-k-no-v1",
            original_image:
              "https://images.trvl-media.com/lodging/8000000/7860000/7858300/7858212/e78a3965_z.jpg",
          },
          {
            thumbnail:
              "https://lh3.googleusercontent.com/proxy/0EmZ9FYtI92LgNIHD7QntyXEvQbIM0GLowxhpritTqJu77_zSfo5P6YVLGoCBZrjyIm4P2Pu0GcYIbWrkd3QnNq17tzucNaJMoX91Z1zfTYLubIbsGhY0Sv8hOmVMiMyvhj_YMlq1404kpZG-lXGW4bC2kwdOw=s287-w287-h192-n-k-no-v1",
            original_image:
              "https://cdn.worldota.net/t/1024x768/content/f6/0f/f60f1d5d32c15e3050df59919835bf93b7ac3e6d.jpeg",
          },
        ],
        overall_rating: 4.3,
        reviews: 2211,
        ratings: [
          {
            stars: 5,
            count: 1345,
          },
          {
            stars: 4,
            count: 529,
          },
          {
            stars: 3,
            count: 194,
          },
          {
            stars: 2,
            count: 47,
          },
          {
            stars: 1,
            count: 96,
          },
        ],
        location_rating: 4.9,
        reviews_breakdown: [
          {
            name: "Service",
            description: "Service",
            total_mentioned: 482,
            positive: 405,
            negative: 55,
            neutral: 22,
          },
          {
            name: "Eigenschap",
            description: "Property",
            total_mentioned: 536,
            positive: 444,
            negative: 57,
            neutral: 35,
          },
          {
            name: "Slapen",
            description: "Sleep",
            total_mentioned: 247,
            positive: 106,
            negative: 90,
            neutral: 51,
          },
          {
            name: "Bar",
            description: "Bar or lounge",
            total_mentioned: 193,
            positive: 167,
            negative: 15,
            neutral: 11,
          },
          {
            name: "Hygiëne En Netheid",
            description: "Cleanliness",
            total_mentioned: 274,
            positive: 214,
            negative: 46,
            neutral: 14,
          },
          {
            name: "Locatie",
            description: "Location",
            total_mentioned: 374,
            positive: 334,
            negative: 13,
            neutral: 27,
          },
        ],
        amenities: [
          "Breakfast",
          "Free Wi-Fi",
          "Air conditioning",
          "Bar",
          "Restaurant",
          "Kitchen in rooms",
        ],
        property_token: "ChgI8JvJkqGSx4n-ARoLL2cvMXRzM2tkcTkQAQ",
        serpapi_property_details_link:
          "https://serpapi.com/search.json?adults=2&check_in_date=2024-07-13&check_out_date=2024-07-14&children=0&currency=EUR&engine=google_hotels&gl=nl&hl=nl&property_token=ChgI8JvJkqGSx4n-ARoLL2cvMXRzM2tkcTkQAQ&q=Amsterdam",
      },
      {
        type: "hotel",
        name: "Radisson Hotel & Suites Amsterdam Zuid",
        description:
          "Stijlvol hotel met een restaurant en een bar, plus ontbijt, parkeren en wifi.",
        link: "https://www.radissonhotels.com/en-us/hotels/radisson-hotel-and-suites-amsterdam-south?cid=a:se+b:gmb+c:emea+i:local+e:rad+d:cese+h:NLAMSSTH",
        gps_coordinates: {
          latitude: 52.3214936,
          longitude: 4.881534,
        },
        check_in_time: "00:00",
        check_out_time: "12:00",
        rate_per_night: {
          lowest: "€ 144",
          extracted_lowest: 144,
          before_taxes_fees: "€ 124",
          extracted_before_taxes_fees: 124,
        },
        total_rate: {
          lowest: "€ 144",
          extracted_lowest: 144,
          before_taxes_fees: "€ 124",
          extracted_before_taxes_fees: 124,
        },
        nearby_places: [
          {
            name: "Schiphol Amsterdam Airport",
            transportations: [
              {
                type: "Taxi",
                duration: "18 min",
              },
              {
                type: "Public transport",
                duration: "29 min",
              },
            ],
          },
          {
            name: "Keuken & Bar",
            transportations: [
              {
                type: "Walking",
                duration: "1 min",
              },
            ],
          },
        ],
        images: [
          {
            thumbnail:
              "https://lh5.googleusercontent.com/p/AF1QipMd4bBBKnsaC5BBiWEZsjXv9gzG43to1eSiwIiK=s287-w287-h192-n-k-no-v1",
            original_image:
              "https://lh5.googleusercontent.com/p/AF1QipMd4bBBKnsaC5BBiWEZsjXv9gzG43to1eSiwIiK=s10000",
          },
          {
            thumbnail:
              "https://lh5.googleusercontent.com/p/AF1QipMGzp7YqEAbyBYQVBpmj5xcrM_kjYaZUfIiUSes=s287-w287-h192-n-k-no-v1",
            original_image:
              "https://lh5.googleusercontent.com/p/AF1QipMGzp7YqEAbyBYQVBpmj5xcrM_kjYaZUfIiUSes=s10000",
          },
          {
            thumbnail:
              "https://lh5.googleusercontent.com/p/AF1QipM9ASgovjINo-fIEMYLo-gtYmEukf1W8tXe4xSy=s287-w287-h192-n-k-no-v1",
            original_image:
              "https://lh5.googleusercontent.com/p/AF1QipM9ASgovjINo-fIEMYLo-gtYmEukf1W8tXe4xSy=s10000",
          },
          {
            thumbnail:
              "https://lh5.googleusercontent.com/p/AF1QipNqBRMRS92TgoGjCB56nKX_zf7GvOTh7-_bHrDk=s287-w287-h192-n-k-no-v1",
            original_image:
              "https://lh5.googleusercontent.com/p/AF1QipNqBRMRS92TgoGjCB56nKX_zf7GvOTh7-_bHrDk=s10000",
          },
          {
            thumbnail:
              "https://lh5.googleusercontent.com/p/AF1QipMQnf8LgbYiy2oBSJVgcDKC5SU3LtfNM9JGYgEe=s287-w287-h192-n-k-no-v1",
            original_image:
              "https://lh5.googleusercontent.com/p/AF1QipMQnf8LgbYiy2oBSJVgcDKC5SU3LtfNM9JGYgEe=s10000",
          },
          {
            thumbnail:
              "https://lh4.googleusercontent.com/proxy/TXgkJRjm_4t0ZQi8-eirY4mshMBEtclqKBlzfVV9jWeUVEzm_0RIZCEMxWG6Vx-t-IX2pmhSxfnfvLj1N2zxNDhdBg3IKlMyUCgmE1IixXYwk4T14k7Z92Cg9IBIZ33RxBDCL2pbHEIhdIg43B24P8o-TBYMFw=s287-w287-h192-n-k-no-v1",
            original_image:
              "https://d2hyz2bfif3cr8.cloudfront.net/imageRepo/6/0/102/721/742/Ammonite_Suite5_GDS_01-10-2018_O.jpg",
          },
          {
            thumbnail:
              "https://lh5.googleusercontent.com/p/AF1QipPa63kdDgISqDpsqVSEs63zRWtDF6L1bVf7PmwC=s287-w287-h192-n-k-no-v1",
            original_image:
              "https://lh5.googleusercontent.com/p/AF1QipPa63kdDgISqDpsqVSEs63zRWtDF6L1bVf7PmwC=s10000",
          },
          {
            thumbnail:
              "https://lh3.googleusercontent.com/proxy/LXaLOmm2CbxAqpc_55zRh7l1qYcnAUfm9ybBuXU-QpgGZDtGAVO3wlKKUMn3Qd0fW4DjMl0bkkc-guSoZrRCq-GbYWnbxgNSRa_GDwYDn0oxopXuC6sILTC7C1-bXAHH4EBHGYcVIAije1_UU89IBNRFXreziA=s287-w287-h192-n-k-no-v1",
            original_image:
              "https://d2hyz2bfif3cr8.cloudfront.net/imageRepo/6/0/102/721/928/Restaurant_1_GDS_01-10-2018_O.jpg",
          },
          {
            thumbnail:
              "https://lh5.googleusercontent.com/p/AF1QipNsuV1Lt7PA7ck8HojUUpAMZsbvEpFOuXxjf0vo=s287-w287-h192-n-k-no-v1",
            original_image:
              "https://lh5.googleusercontent.com/p/AF1QipNsuV1Lt7PA7ck8HojUUpAMZsbvEpFOuXxjf0vo=s10000",
          },
        ],
        overall_rating: 4.3,
        reviews: 1276,
        ratings: [
          {
            stars: 5,
            count: 786,
          },
          {
            stars: 4,
            count: 302,
          },
          {
            stars: 3,
            count: 82,
          },
          {
            stars: 2,
            count: 29,
          },
          {
            stars: 1,
            count: 77,
          },
        ],
        location_rating: 3.3,
        reviews_breakdown: [
          {
            name: "Eigenschap",
            description: "Property",
            total_mentioned: 363,
            positive: 304,
            negative: 35,
            neutral: 24,
          },
          {
            name: "Service",
            description: "Service",
            total_mentioned: 264,
            positive: 181,
            negative: 65,
            neutral: 18,
          },
          {
            name: "Ontbijt",
            description: "Breakfast",
            total_mentioned: 147,
            positive: 102,
            negative: 34,
            neutral: 11,
          },
          {
            name: "Locatie",
            description: "Location",
            total_mentioned: 195,
            positive: 103,
            negative: 50,
            neutral: 42,
          },
          {
            name: "Wellness",
            description: "Wellness",
            total_mentioned: 18,
            positive: 10,
            negative: 4,
            neutral: 4,
          },
          {
            name: "Hygiëne En Netheid",
            description: "Cleanliness",
            total_mentioned: 143,
            positive: 108,
            negative: 25,
            neutral: 10,
          },
        ],
        amenities: [
          "Breakfast ($)",
          "Free Wi-Fi",
          "Parking ($)",
          "Air conditioning",
          "Pet-friendly",
          "Fitness centre",
          "Bar",
          "Restaurant",
          "Room service",
          "Kitchen in some rooms",
          "Airport shuttle",
          "Full-service laundry",
          "Accessible",
          "Child-friendly",
          "Smoke-free property",
        ],
        property_token: "ChoIgfeI9cmwttG7ARoNL2cvMTFmMmdzenZrbBAB",
        serpapi_property_details_link:
          "https://serpapi.com/search.json?adults=2&check_in_date=2024-07-13&check_out_date=2024-07-14&children=0&currency=EUR&engine=google_hotels&gl=nl&hl=nl&property_token=ChoIgfeI9cmwttG7ARoNL2cvMTFmMmdzenZrbBAB&q=Amsterdam",
      },
      {
        type: "hotel",
        name: "MEININGER Hotel Amsterdam City West",
        description:
          "Modern hotel met privékamers en slaapzalen, een gedeelde keuken en een trendy bar met spelletjes.",
        link: "https://www.meininger-hotels.com/en/hotels/amsterdam/hotel-amsterdam-sloterdijk/?utm_source=gmb&utm_medium=referral&utm_campaign=AMS-OP&utm_content=website",
        gps_coordinates: {
          latitude: 52.390365,
          longitude: 4.8374609,
        },
        check_in_time: "15:00",
        check_out_time: "11:00",
        rate_per_night: {
          lowest: "€ 102",
          extracted_lowest: 102,
          before_taxes_fees: "€ 91",
          extracted_before_taxes_fees: 91,
        },
        total_rate: {
          lowest: "€ 102",
          extracted_lowest: 102,
          before_taxes_fees: "€ 91",
          extracted_before_taxes_fees: 91,
        },
        nearby_places: [
          {
            name: "Amsterdam Centraal",
            transportations: [
              {
                type: "Public transport",
                duration: "9 min",
              },
            ],
          },
          {
            name: "Sloterdijk",
            transportations: [
              {
                type: "Walking",
                duration: "2 min",
              },
            ],
          },
          {
            name: "Schiphol Amsterdam Airport",
            transportations: [
              {
                type: "Public transport",
                duration: "14 min",
              },
              {
                type: "Taxi",
                duration: "16 min",
              },
            ],
          },
          {
            name: "BRET",
            transportations: [
              {
                type: "Walking",
                duration: "1 min",
              },
            ],
          },
        ],
        images: [
          {
            thumbnail:
              "https://lh5.googleusercontent.com/p/AF1QipM3kgSsaWaiBTYV6RnAogv9WUdJrC5sS17GySfg=s287-w287-h192-n-k-no-v1",
            original_image:
              "https://lh5.googleusercontent.com/p/AF1QipM3kgSsaWaiBTYV6RnAogv9WUdJrC5sS17GySfg=s10000",
          },
          {
            thumbnail:
              "https://lh5.googleusercontent.com/p/AF1QipMX4-tZ0bZ8wFgWQnyub2cOThnjg4vmt70DggzL=s287-w287-h192-n-k-no-v1",
            original_image:
              "https://lh5.googleusercontent.com/p/AF1QipMX4-tZ0bZ8wFgWQnyub2cOThnjg4vmt70DggzL=s10000",
          },
          {
            thumbnail:
              "https://lh5.googleusercontent.com/p/AF1QipMY84uB5cvE4zNt0x_YcKt3pmGtk1BAWdBvIKoT=s287-w287-h192-n-k-no-v1",
            original_image:
              "https://lh5.googleusercontent.com/p/AF1QipMY84uB5cvE4zNt0x_YcKt3pmGtk1BAWdBvIKoT=s10000",
          },
          {
            thumbnail:
              "https://lh5.googleusercontent.com/p/AF1QipOU_vrueIK95STbdYw83MmKBfTAS0kv68DATkfB=s287-w287-h192-n-k-no-v1",
            original_image:
              "https://lh5.googleusercontent.com/p/AF1QipOU_vrueIK95STbdYw83MmKBfTAS0kv68DATkfB=s10000",
          },
          {
            thumbnail:
              "https://lh5.googleusercontent.com/p/AF1QipPawV7w8mDHQ3DT6lWVBluvw6ueQXk-5Kaln3Ye=s287-w287-h192-n-k-no-v1",
            original_image:
              "https://lh5.googleusercontent.com/p/AF1QipPawV7w8mDHQ3DT6lWVBluvw6ueQXk-5Kaln3Ye=s10000",
          },
          {
            thumbnail:
              "https://lh3.googleusercontent.com/proxy/k65eXQPCHoiH3U6xkGUrrKw7bBKQArRIANxuRK4HXklHUHS4kIpYl1YA9ATG5c7Ug3zStCFYbRQMDbVfXcGFO3jMnZsPXHqg9V1hVETKgsvtXEMCUlQPszTcUHyGKr_tv25pDLzetsgU4hYOL_rEsJ5sh-r06w=s287-w287-h192-n-k-no-v1",
            original_image:
              "https://cdn.worldota.net/t/1024x768/content/48/6d/486dbaf9514c8ae575c5a5908eff66a7b46c6772.jpeg",
          },
          {
            thumbnail:
              "https://lh5.googleusercontent.com/p/AF1QipO4C5t3QyNPWsfdF61jFT8G-t86Km0y7xflZC37=s287-w287-h192-n-k-no-v1",
            original_image:
              "https://lh5.googleusercontent.com/p/AF1QipO4C5t3QyNPWsfdF61jFT8G-t86Km0y7xflZC37=s10000",
          },
          {
            thumbnail:
              "https://lh4.googleusercontent.com/proxy/OIz4dy0t1ImV5V2cQHyqoZvkvn9gDr7QnPpoc10NWQUS_eXgK9eOaLuDszyxx-gQ-NQmuoHQ2GuVMQkERsSpQkfCfQDTs7Bfz-f75cY5ijJ1UIad2cw-y3HxfFZk8UkGzKDlwBLOjQuutX6XOphWRK4QFL_GFrE=s287-w287-h192-n-k-no-v1",
            original_image:
              "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/63/72/bb/caption.jpg?w=2100&h=1400&s=1",
          },
          {
            thumbnail:
              "https://lh5.googleusercontent.com/p/AF1QipO5V1gJSk2OiyozQ0RUhq9wJh7g7bkYAZQAxXpA=s287-w287-h192-n-k-no-v1",
            original_image:
              "https://lh5.googleusercontent.com/p/AF1QipO5V1gJSk2OiyozQ0RUhq9wJh7g7bkYAZQAxXpA=s10000",
          },
        ],
        overall_rating: 4.2,
        reviews: 7272,
        ratings: [
          {
            stars: 5,
            count: 3612,
          },
          {
            stars: 4,
            count: 2202,
          },
          {
            stars: 3,
            count: 799,
          },
          {
            stars: 2,
            count: 291,
          },
          {
            stars: 1,
            count: 368,
          },
        ],
        location_rating: 3.5,
        reviews_breakdown: [
          {
            name: "Openbaar Vervoer",
            description: "Public transit",
            total_mentioned: 1264,
            positive: 978,
            negative: 64,
            neutral: 222,
          },
          {
            name: "Hygiëne En Netheid",
            description: "Cleanliness",
            total_mentioned: 1425,
            positive: 1055,
            negative: 293,
            neutral: 77,
          },
          {
            name: "Eigenschap",
            description: "Property",
            total_mentioned: 1938,
            positive: 1446,
            negative: 335,
            neutral: 157,
          },
          {
            name: "Locatie",
            description: "Location",
            total_mentioned: 1586,
            positive: 1290,
            negative: 88,
            neutral: 208,
          },
          {
            name: "Service",
            description: "Service",
            total_mentioned: 1393,
            positive: 1070,
            negative: 245,
            neutral: 78,
          },
          {
            name: "Keuken",
            description: "Kitchen",
            total_mentioned: 499,
            positive: 359,
            negative: 82,
            neutral: 58,
          },
        ],
        amenities: [
          "Breakfast ($)",
          "Free Wi-Fi",
          "Parking ($)",
          "Pet-friendly",
          "Bar",
          "Accessible",
          "Child-friendly",
          "Smoke-free property",
        ],
        property_token: "ChcImuu7t8jt6KkeGgsvZy8xdGZrcHl3OBAB",
        serpapi_property_details_link:
          "https://serpapi.com/search.json?adults=2&check_in_date=2024-07-13&check_out_date=2024-07-14&children=0&currency=EUR&engine=google_hotels&gl=nl&hl=nl&property_token=ChcImuu7t8jt6KkeGgsvZy8xdGZrcHl3OBAB&q=Amsterdam",
      },
      {
        type: "hotel",
        name: "Cityden Stadshart",
        description:
          "Trendy kamers en suites in een luxe appartementenhotel met een mediterraans restaurant en een fitnessruimte.",
        link: "https://www.cityden.com/amstelveen-stadshart/?utm_source=GMB&utm_medium=organic&utm_campaign=Cityden+Stadshart",
        gps_coordinates: {
          latitude: 52.3024512,
          longitude: 4.8692358,
        },
        check_in_time: "15:00",
        check_out_time: "11:00",
        rate_per_night: {
          lowest: "€ 127",
          extracted_lowest: 127,
          before_taxes_fees: "€ 108",
          extracted_before_taxes_fees: 108,
        },
        total_rate: {
          lowest: "€ 127",
          extracted_lowest: 127,
          before_taxes_fees: "€ 108",
          extracted_before_taxes_fees: 108,
        },
        nearby_places: [
          {
            name: "Schiphol Amsterdam Airport",
            transportations: [
              {
                type: "Taxi",
                duration: "13 min",
              },
              {
                type: "Public transport",
                duration: "22 min",
              },
            ],
          },
          {
            name: "Lucia's Stadshart",
            transportations: [
              {
                type: "Walking",
                duration: "1 min",
              },
            ],
          },
        ],
        images: [
          {
            thumbnail:
              "https://lh4.googleusercontent.com/proxy/QAsHludESPa5KwMqxcSvIXXZj27CHi5FcrZem5gqMRzdeJAILdJLsXW80bLEHsgzcOkCuUj-4kLq5QNffrLlpVLX9gTMz_KPrX_nv46cTUYg4sKcpql7Zv5WJ0hKKvHRp6lHMQRxJfDViLAM-DPvPyBwhPlC0v0=s287-w287-h192-n-k-no-v1",
            original_image:
              "https://photos.hotelbeds.com/giata/original/93/937870/937870a_hb_w_007.jpg",
          },
          {
            thumbnail:
              "https://lh5.googleusercontent.com/p/AF1QipMTvJkcywG7vbdDq38LVicgXyFCr8DPOl_DXbKo=s287-w287-h192-n-k-no-v1",
            original_image:
              "https://lh5.googleusercontent.com/p/AF1QipMTvJkcywG7vbdDq38LVicgXyFCr8DPOl_DXbKo=s10000",
          },
          {
            thumbnail:
              "https://lh4.googleusercontent.com/proxy/yyinsTPsTmtWpOO9Uaf7A9W_6F-9kqBouKSvgFRfASJMVGHf-vIx3h2wB5WB03UPFErAlukTcmVgauZUz7A2IV6hE2CzTf6zlDRtnEGlN47k_QIJ1zpuM48p2BTyWgr3AtJ6tF7SksEKTSqtyLWZWCogUMi1qPs=s287-w287-h192-n-k-no-v1",
            original_image:
              "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/e6/fb/3b/2-bedroom-apartment-xl.jpg?w=1300&h=1000&s=1",
          },
          {
            thumbnail:
              "https://lh3.googleusercontent.com/proxy/MdmSLuChEedsZGQEzIXLpx-bIy3ImBUXTPaOUZnbAnSnv7Fx8_aXa8_dLu_Q3Sogt5dRVtBOWPlFHB2WFyIShWvcFi1NwUIeYa2gJu7OKogvaSqeF6r43XCnMCfWabXGKL8ezbH7jWXP_dLYlDe8mzYH5qMXrg=s287-w287-h192-n-k-no-v1",
            original_image:
              "https://d2hyz2bfif3cr8.cloudfront.net/imageRepo/7/0/112/688/710/9._Cityden_The_Garden_-_Fitness_1_O.jpg",
          },
          {
            thumbnail:
              "https://lh6.googleusercontent.com/proxy/K0dxXvJT8qeiWxGeZ1l9oDADa49jwCClUaXJsPuTll0oITQa3Xq97xn6ZkODVjSRBaYz9y0utznepUU9kr_CROMhMDII2Y6Z07O2ycD7GdvzSY-92BJOPP1i18Fx_hzKPZdG72SFBao3fMZSUN0z9z25NC7sAAQ=s287-w287-h192-n-k-no-v1",
            original_image:
              "https://photos.hotelbeds.com/giata/original/93/937870/937870a_hb_r_015.jpg",
          },
          {
            thumbnail:
              "https://lh5.googleusercontent.com/p/AF1QipOknVGTw-b21O_u5j-nLJyBhCzllgaORau9fSvH=s287-w287-h192-n-k-no-v1",
            original_image:
              "https://lh5.googleusercontent.com/p/AF1QipOknVGTw-b21O_u5j-nLJyBhCzllgaORau9fSvH=s10000",
          },
          {
            thumbnail:
              "https://lh4.googleusercontent.com/proxy/VfyCRv8xrcka63WhvF8dYu4ryImksKGliClc6m7dHOUizEHetxd02SSjF8upangItKLVEiCQbwaRZsPmH-ljIp4lW9SEPOLQ6QtoKNDrq-aA3wYQnAJB3CjCwWG0Hun2SWwYxF6v2u99MosN-Lb-IWVx5hCfsQ=s287-w287-h192-n-k-no-v1",
            original_image:
              "https://photos.hotelbeds.com/giata/original/93/937870/937870a_hb_r_006.jpg",
          },
          {
            thumbnail:
              "https://lh6.googleusercontent.com/proxy/HOROvrRmqSsqgvuPgxEYhrszpViJoxLjXxZS9nnd_pxn20BU3a-JGEBbv51G6TP0uMG-_YTaFxAMr7uHHSXsFg0aZr5awPIkSaDfvjOOnvIdimGxCk8ewVmCunb8xDm9wUxkJGaW-5uI1m-sR0sleGRYeOcLZl0=s287-w287-h192-n-k-no-v1",
            original_image:
              "https://photos.hotelbeds.com/giata/original/93/937870/937870a_hb_r_007.jpg",
          },
          {
            thumbnail:
              "https://lh5.googleusercontent.com/proxy/n5s1CxL5Q6f5JBCw9B9bIl9N3tdDJjjEbV0bYg6cKxOxQUmTyLZZSAviuSC-t8iqi60SGtR4HdGTylBRamgl3GaDezHY6sNGjCnvCuWBRY3GUN5e6-7gwhMB6CGrJaWX8CvAA6NpIySKb7u4kDKQZ4Nu0qvpUA=s287-w287-h192-n-k-no-v1",
            original_image:
              "https://photos.hotelbeds.com/giata/original/93/937870/937870a_hb_r_001.jpg",
          },
        ],
        overall_rating: 4.6,
        reviews: 596,
        ratings: [
          {
            stars: 5,
            count: 439,
          },
          {
            stars: 4,
            count: 103,
          },
          {
            stars: 3,
            count: 30,
          },
          {
            stars: 2,
            count: 12,
          },
          {
            stars: 1,
            count: 12,
          },
        ],
        location_rating: 3.6,
        reviews_breakdown: [
          {
            name: "Service",
            description: "Service",
            total_mentioned: 208,
            positive: 186,
            negative: 16,
            neutral: 6,
          },
          {
            name: "Eigenschap",
            description: "Property",
            total_mentioned: 200,
            positive: 178,
            negative: 13,
            neutral: 9,
          },
          {
            name: "Locatie",
            description: "Location",
            total_mentioned: 129,
            positive: 113,
            negative: 4,
            neutral: 12,
          },
          {
            name: "Hygiëne En Netheid",
            description: "Cleanliness",
            total_mentioned: 107,
            positive: 90,
            negative: 14,
            neutral: 3,
          },
          {
            name: "Wellness",
            description: "Wellness",
            total_mentioned: 10,
            positive: 9,
            negative: 1,
            neutral: 0,
          },
          {
            name: "Gezinsvriendelijk",
            description: "Family friendly",
            total_mentioned: 27,
            positive: 21,
            negative: 1,
            neutral: 5,
          },
        ],
        amenities: [
          "Breakfast ($)",
          "Free Wi-Fi",
          "Parking ($)",
          "Air conditioning",
          "Pet-friendly",
          "Fitness centre",
          "Bar",
          "Restaurant",
          "Room service",
          "Kitchen in rooms",
          "Full-service laundry",
          "Accessible",
          "Child-friendly",
          "Smoke-free property",
        ],
        property_token: "ChoInYqgqYf2vIe9ARoNL2cvMTFnMHMwMGhreRAB",
        serpapi_property_details_link:
          "https://serpapi.com/search.json?adults=2&check_in_date=2024-07-13&check_out_date=2024-07-14&children=0&currency=EUR&engine=google_hotels&gl=nl&hl=nl&property_token=ChoInYqgqYf2vIe9ARoNL2cvMTFnMHMwMGhreRAB&q=Amsterdam",
      },
    ],
  };
  const propertyList = tempData.properties;
</script>

<div class="main-container flex">
  <div
    class="main-container-text lg:flex lg:flex-col lg:text-left sm:text-center sm:self-end lg:ml-36 lg:pl-20 lg:pb-10"
  >
    <h1 class="lg:text-[70px]/[78px]">Lorem ipsun dolor sit amet</h1>
    <div class="subtitle-text lg:text-[22px]/[30px] lg:pl-2 lg:w-3/5">
      Lorem ipsun dolor sit amet, consectetur adipiscing elit. Rhoncus. at massa
      eleifend purus sagittis sed justo, purus diam.
    </div>
    <div class="main-container-button-group sm:mb-5">
      <button class="btn-primary">LOREM IPSUN</button>
      <button class="btn-secundary">LOREM IPSUN</button>
    </div>
  </div>
</div>

<div class="listing-container lg:p-44 sm:p-3">
  <h2 class="py-3">Ontdek ons hotel aanbod</h2>

  <div class="listings">
    <div class="grid lg:grid-rows-2 grid-flow-col gap-8 sm:grid-rows-4">
      {#each propertyList as property}
        <Offerbox
          hotelName={property.name}
          hotelDescription={property.description}
          hotelScore={property.overall_rating}
          hotelReviews={property.reviews}
          hotelPrice={property.rate_per_night.lowest}
          hotelImg={property.images[0].original_image}
        ></Offerbox>
      {/each}
    </div>
  </div>
</div>

<style>
  .main-container {
    background-size: cover;
    color: white;
    height: 80vh;
    background-image: url("./header-img.png");
    background-repeat: no-repeat;
    background-position: center center;
  }
  .main-container-text {
    padding-left: 30px;
    padding-right: 30px;
  }
  .listings {
    align-items: center;
  }
</style>

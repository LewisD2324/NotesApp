import firebase from "firebase"


// const firebaseKey = {
//     type: "service_account",
//     project_id: "mynotesapp-cc6e4",
//     private_key_id: "3cae2822d4d2930fb669f3c2f126168ba4094a14",
//     private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDYZ1VCsNj9GCG6\nh5oVW6WEQKmyMGJ0GCk3wiw1hes8LK7K1VuG8puTbURt3oMvmMfArgKakVZNA+uT\npOQm3qXOYm0QhMLY7h0PmMYCamzKclq6maImIubkbdycEBeAUE8flSoEsFsGDScT\n8hbi433GeGxyWgAJ09lbm6BF4/EszPDy0SDmnAixdObvMmIZZhDCn06yfpMFA6Q2\nGJRiWEHWmihTVKjYTkU3vjYK9AxkoXa7mfEF5qhPKs5BmGN7GQfTQj8eIkQAlrgA\n6Y3B665JeowLKA3vx0Nac6FFlfSxut+RYfPk6huXcOrgnAd/ls99QDxyhE8ngz/J\nfFgVbT0lAgMBAAECggEAYku5miPrRDdYZrpefnIVAjg+/I3mwpYQ7t9Xpm4wljIz\nqTV1sBv2F+arjP5j91Q986L20s/OdAgiUvu0mIVMqiziHn03ZkLuV13NH17JEMIV\nvSm40frLhxnx+b+DdUjFT/K41c1nYx3JUNGHnMK5qFOd6uk/mDcuxWIw0F5D99U/\ni0pnal7z2JW4KxUbMtiobpqLiGYkVgQoBjPc3Zra9lN7mNW10YHL2PKgUt4p+z9D\n7z+s5p6xRqOcywF03qalNDQrUA9lANQnE7qp81kSPlH137gzOZx85jxCQZ4+0TJJ\nesruF8WRjiGS4eWv3amK1msAirfIsid0rPcgPYEcJwKBgQDuYcr9E1Bgpc77jJX7\n901RAHYvAcc3AjJpF4djzmQzjsf3/Lc6JeHykxm6Tpzmj2a7TjTz/VULnQF6GoLu\npfVdVcDKu9/0dV/SKKqK3T6QhJ1o5qlM+ZpnE6GEXg8W5hwrj4b4riL8Gfad+owE\n/I78savlCQv4SswrpT6LESDuDwKBgQDoZbUwcoY5CB8mx9tpKjzOIFPWWSlIJyfH\nJSfN4SjU3ynKTw/R5rMe/cQDBH3xOrdymK0BWRUnZuBaMEq8ooIsbtTWTWGpDUMR\nNJQ4RpiyDfE4Xo4qNeoSInW7E0lOWCnxjxJeXeEWQ+ft3jXeIdMf3s4yPOhv40eb\nSm4YT29ViwKBgBPnVmuLEUsAjSeztVI0c+Avia6jF18gb9UWgddzhCpJ4ahzEVlp\nkFQQtDU6Gx+lGY7KGOHGZTNzCIyJaiVC9hm070P+K9TdeAK0Iok1r+OhLwNzPu+O\nZ7XzjajfsaLX08JPWZWp9IHYKR9HrCk+bTHsI84b00QH+sQqJ+60n2tBAoGASF8M\nCtdPV0lhMhmBCYH+x44nrZO8mFyhNZIrkCCzL3+Dqx3t5kb6twb92Ja4hbvsTwKe\ntdHBFbEi4tMxIwdUlHO7UjVs2VFo9l2yXsgVWzWeThicGycJCrayhRyfcodgIHqW\nlM6VfvKMsnXFvrQ35C/ldJ2lINrdfM2z9VwfZrsCgYEAv9rra+JRSfBlDWcPn32F\nGsfKLj34l+NOZo5TWHEbY9BnM1voXh0CGpNzpOOalR/9VWvqtHytuRxSmDwEhIQv\nZiY34x8q7PTrRiHjOMq/O81K06qpegjnXkKejPEUmkSOjaebxMKtY5uxo2POhxuI\nibZqRK7E+d3ixjOhhT3h1wo=\n-----END PRIVATE KEY-----\n",
//     client_email: "firebase-adminsdk-fq015@mynotesapp-cc6e4.iam.gserviceaccount.com",
//     client_id: "115463828227029758043",
//     auth_uri: "https://accounts.google.com/o/oauth2/auth",
//     token_uri: "https://oauth2.googleapis.com/token",
//     auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
//     client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fq015%40mynotesapp-cc6e4.iam.gserviceaccount.com"
//   }
  
//follow this
//https://itnext.io/firebase-login-functionality-from-scratch-with-react-redux-2bf316e5820f
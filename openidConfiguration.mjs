const openIdConfiguration = {
    "request_parameter_supported": true,
    "id_token_encryption_alg_values_supported": [
      "RSA-OAEP", "RSA1_5", "RSA-OAEP-256"
    ],
    "registration_endpoint": "https://idp-p.mitre.org/register",
    "userinfo_signing_alg_values_supported": [
      "HS256", "HS384", "HS512", "RS256", "RS384", "RS512"
    ],
    "token_endpoint": "https://idp-p.mitre.org/token",
    "request_uri_parameter_supported": false,
    "request_object_encryption_enc_values_supported": [
      "A192CBC-HS384", "A192GCM", "A256CBC+HS512",
      "A128CBC+HS256", "A256CBC-HS512",
      "A128CBC-HS256", "A128GCM", "A256GCM"
    ],
    "token_endpoint_auth_methods_supported": [
      "client_secret_post",
      "client_secret_basic",
      "client_secret_jwt",
      "private_key_jwt",
      "none"
    ],
    "userinfo_encryption_alg_values_supported": [
      "RSA-OAEP", "RSA1_5",
      "RSA-OAEP-256"
    ],
    "subject_types_supported": [
      "public", "pairwise"
    ],
    "id_token_encryption_enc_values_supported": [
      "A192CBC-HS384", "A192GCM", "A256CBC+HS512",
      "A128CBC+HS256", "A256CBC-HS512", "A128CBC-HS256",
      "A128GCM", "A256GCM"
    ],
    "claims_parameter_supported": false,
    "jwks_uri": "http://localhost:3000/jwk",
    "id_token_signing_alg_values_supported": [
      "HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "none"
    ],
    "authorization_endpoint": "https://idp-p.mitre.org/authorize",
    "require_request_uri_registration": false,
    "introspection_endpoint": "https://idp-p.mitre.org/introspect",
    "request_object_encryption_alg_values_supported": [
      "RSA-OAEP", "RSA1_5", "RSA-OAEP-256"
    ],
    "service_documentation": "https://idp-p.mitre.org/about",
    "response_types_supported": [
      "code", "token"
    ],
    "token_endpoint_auth_signing_alg_values_supported": [
      "HS256", "HS384", "HS512", "RS256", "RS384", "RS512"
    ],
    "revocation_endpoint": "https://idp-p.mitre.org/revoke",
    "request_object_signing_alg_values_supported": [
      "HS256", "HS384", "HS512", "RS256", "RS384", "RS512"
    ],
    "claim_types_supported": [
      "normal"
    ],
    "grant_types_supported": [
      "authorization_code",
      "implicit",
      "urn:ietf:params:oauth:grant-type:jwt-bearer",
      "client_credentials",
      "urn:ietf:params:oauth:grant_type:redelegate"
    ],
    "scopes_supported": [
      "profile", "openid", "email", "address", "phone", "offline_access"
    ],
    "userinfo_endpoint": "https://idp-p.mitre.org/userinfo",
    "userinfo_encryption_enc_values_supported": [
      "A192CBC-HS384", "A192GCM", "A256CBC+HS512","A128CBC+HS256",
      "A256CBC-HS512", "A128CBC-HS256", "A128GCM", "A256GCM"
    ],
    "op_tos_uri": "https://idp-p.mitre.org/about",
    "issuer": "https://idp-p.mitre.org/",
    "op_policy_uri": "https://idp-p.mitre.org/about",
    "claims_supported": [
      "sub", "name", "preferred_username", "given_name", "family_name",
      "middle_name", "nickname", "profile", "picture", "website",
      "gender", "zone_info", "locale", "updated_time", "birthdate",
      "email", "email_verified", "phone_number", "address"
    ]
};

export { openIdConfiguration };
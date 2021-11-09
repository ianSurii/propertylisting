// To parse required this JSON data, do
//
//     final property = propertyFromJson(jsonString);

import 'dart:convert';

Property propertyFromJson(String str) => Property.fromJson(json.decode(str));

String propertyToJson(Property data) => json.encode(data.toJson());

class Property {
    Property({
        required this.id,
        required this.name,
        required this.price,
        required this.images,
        required this.description,
        required this.contact,
        required this.owner,
        required this.category,
        required this.propertyLocation,
    });

    String id;
    String name;
    String price;
    List<String> images;
    String description;
    String contact;
    String owner;
    String category;
    PropertyLocation propertyLocation;

    factory Property.fromJson(Map<String, dynamic> json) => Property(
        id: json["id"],
        name: json["name"],
        price: json["price"],
        images: List<String>.from(json["images"].map((x) => x)),
        description: json["description"],
        contact: json["contact"],
        owner: json["owner"],
        category: json["category"],
        propertyLocation: PropertyLocation.fromJson(json["propertyLocation"]),
    );

    Map<String, dynamic> toJson() => {
        "id": id,
        "name": name,
        "price": price,
        "images": List<dynamic>.from(images.map((x) => x)),
        "description": description,
        "contact": contact,
        "owner": owner,
        "category": category,
        "propertyLocation": propertyLocation.toJson(),
    };
}

class PropertyLocation {
    PropertyLocation({
          required this.name,
          required this.cordinates,
    });

    String name;
    Cordinates cordinates;

    factory PropertyLocation.fromJson(Map<String, dynamic> json) => PropertyLocation(
        name: json["name"],
        cordinates: Cordinates.fromJson(json["cordinates"]),
    );

    Map<String, dynamic> toJson() => {
        "name": name,
        "cordinates": cordinates.toJson(),
    };
}

class Cordinates {
    Cordinates({
        required this.lat,
        required this.long,
    });

    double lat;
    double long;

    factory Cordinates.fromJson(Map<String, dynamic> json) => Cordinates(
        lat: json["lat"].toDouble(),
        long: json["long"].toDouble(),
    );

    Map<String, dynamic> toJson() => {
        "lat": lat,
        "long": long,
    };
}

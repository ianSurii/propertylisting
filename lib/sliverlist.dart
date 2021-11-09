import 'dart:math';

import 'package:carousel_slider/carousel_slider.dart';
import 'package:flutter/material.dart';
import 'package:propertylisting/models/property.dart';

class CustomList extends StatefulWidget {
  CustomList({Key? key}) : super(key: key);

  @override
  _CustomListState createState() => _CustomListState();
}

class _CustomListState extends State<CustomList> {
  List<Property> _recentProperty = [
    Property(
        id: "1",
        name: "La Casa",
        price: "2400000",
        images: [
          "1.jpg",
          "2.jpg",
          "3.jpg",
          "4.jpg",
          "5.jpg",
          "6.jpg",
          "7.jpg",
          "8.jpg",
          "9.jpg",
          "10.jpg"
        ],
        description: "Minimalistic Modern Master Piece",
        contact: "071212173",
        owner: "Ower",
        category: "Mansions ",
        propertyLocation: PropertyLocation(
            cordinates: Cordinates(lat: 0.6, long: 37.5), name: 'Adams')),
    Property(
        id: "2",
        name: "La Casa",
        price: "2400000",
        images: [
          "1.jpg",
          "2.jpg",
          "3.jpg",
          "4.jpg",
          "5.jpg",
          "6.jpg",
          "7.jpg",
          "8.jpg",
          "9.jpg",
          "10.jpg"
        ],
        description: "Minimalistic Modern Master Piece",
        contact: "071212173",
        owner: "Ower",
        category: "Mansions ",
        propertyLocation: PropertyLocation(
            cordinates: Cordinates(lat: 0.6, long: 37.5), name: 'Adams')),
    Property(
        id: "3",
        name: "La Casa",
        price: "2400000",
        images: [
          "1.jpg",
          "2.jpg",
          "3.jpg",
          "4.jpg",
          "5.jpg",
          "6.jpg",
          "7.jpg",
          "8.jpg",
          "9.jpg",
          "10.jpg"
        ],
        description: "Minimalistic Modern Master Piece",
        contact: "071212173",
        owner: "Ower",
        category: "Mansions ",
        propertyLocation: PropertyLocation(
            cordinates: Cordinates(lat: 0.6, long: 37.5), name: 'Adams')),
    Property(
        id: "4",
        name: "La Casa",
        price: "2400000",
        images: [
          "1.jpg",
          "2.jpg",
          "3.jpg",
          "4.jpg",
          "5.jpg",
          "6.jpg",
          "7.jpg",
          "8.jpg",
          "9.jpg",
          "10.jpg"
        ],
        description: "Minimalistic Modern Master Piece",
        contact: "071212173",
        owner: "Ower",
        category: "Mansions ",
        propertyLocation: PropertyLocation(
            cordinates: Cordinates(lat: 0.6, long: 37.5), name: 'Adams'))
  ];
  @override
  Widget build(BuildContext context) {
    return SliverList(
      delegate: SliverChildBuilderDelegate((BuildContext context, int i) {
        return Container(
            width: 350,
            height: 450,
            color: Colors.white,
            child: ListView.builder(
                itemCount: _recentProperty.length,
                scrollDirection: Axis.horizontal,
                itemBuilder: (BuildContext context, int index) {
                  return Padding(
                    padding: const EdgeInsets.all(15.0),
                    child: Container(
                      width: 350,
                      height: 450,
                      decoration: BoxDecoration(
                        color: Colors.white,
                        boxShadow: [
                          BoxShadow(
                            color: Colors.grey.withOpacity(0.5),
                            spreadRadius: 5,
                            blurRadius: 7,
                            offset: Offset(0, 3), // changes position of shadow
                          ),
                        ],
                        borderRadius: BorderRadius.circular(40),
                      ),
                      child: Column(
                        children: [
                          CarouselSlider(
                              options: CarouselOptions(
                                  autoPlay: true,
                                  autoPlayInterval: Duration(
                                      seconds: Random.secure().nextInt(2) + 1),
                                  height: 300.0),
                              items: _recentProperty[index].images.map((i) {
                                return Builder(
                                  builder: (BuildContext context) {
                                    return ClipRRect(
                                      borderRadius: BorderRadius.circular(20),
                                      child: Image(
                                          image: AssetImage(
                                            "images/" +
                                                (index + 1).toString() +
                                                "/" +
                                                i,
                                          ),
                                          fit: BoxFit.cover),
                                    );
                                  },
                                );
                              }).toList()),
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                            children: [
                              Icon(Icons.home, color: Colors.orange),
                              Text(_recentProperty[index].name),
                              Row(
                                mainAxisAlignment: MainAxisAlignment.start,
                                children: [
                                  Icon(Icons.pin_drop, color: Colors.orange),
                                  Text(_recentProperty[index]
                                      .propertyLocation
                                      .name),
                                  IconButton(
                                      onPressed: () {},
                                      icon: Icon(Icons.map_outlined,
                                          color: Colors.orange))
                                ],
                              ),
                              Row(
                                mainAxisAlignment: MainAxisAlignment.start,
                                children: [
                                  Icon(Icons.money),
                                  Text("Ksh" +
                                      ((int.parse(_recentProperty[index]
                                                  .price)) /
                                              1000000)
                                          .toString() +
                                      "M"),
                                  IconButton(
                                      onPressed: () {},
                                      icon: Icon(Icons.map_outlined,
                                          color: Colors.orange))
                                ],
                              )
                            ],
                          ),
                          Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              ElevatedButton(
                                  onPressed: () {},
                                  style: ElevatedButton.styleFrom(
                                      fixedSize: Size(300, 10)),
                                  child: Text("SEE DETAILS"))
                            ],
                          )
                        ],
                      ),
                    ),
                  );
                }));
      }, childCount: 1),
    );
  }
}

class CustomList2 extends StatefulWidget {
  CustomList2({Key? key}) : super(key: key);

  @override
  _CustomList2State createState() => _CustomList2State();
}

class _CustomList2State extends State<CustomList2> {
  List<Property> _recentProperty = [
    Property(
        id: "1",
        name: "La Casa",
        price: "2400000",
        images: [
          "1.jpg",
          "2.jpg",
          "3.jpg",
          "4.jpg",
          "5.jpg",
          "6.jpg",
          "7.jpg",
          "8.jpg",
          "9.jpg",
          "10.jpg"
        ],
        description: "Minimalistic Modern Master Piece",
        contact: "071212173",
        owner: "Ower",
        category: "Mansions ",
        propertyLocation: PropertyLocation(
            cordinates: Cordinates(lat: 0.6, long: 37.5), name: 'Adams')),
    Property(
        id: "2",
        name: "La Casa",
        price: "2400000",
        images: [
          "1.jpg",
          "2.jpg",
          "3.jpg",
          "4.jpg",
          "5.jpg",
          "6.jpg",
          "7.jpg",
          "8.jpg",
          "9.jpg",
          "10.jpg"
        ],
        description: "Minimalistic Modern Master Piece",
        contact: "071212173",
        owner: "Ower",
        category: "Mansions ",
        propertyLocation: PropertyLocation(
            cordinates: Cordinates(lat: 0.6, long: 37.5), name: 'Adams')),
    Property(
        id: "3",
        name: "La Casa",
        price: "2400000",
        images: [
          "1.jpg",
          "2.jpg",
          "3.jpg",
          "4.jpg",
          "5.jpg",
          "6.jpg",
          "7.jpg",
          "8.jpg",
          "9.jpg",
          "10.jpg"
        ],
        description: "Minimalistic Modern Master Piece",
        contact: "071212173",
        owner: "Ower",
        category: "Mansions ",
        propertyLocation: PropertyLocation(
            cordinates: Cordinates(lat: 0.6, long: 37.5), name: 'Adams')),
    Property(
        id: "4",
        name: "La Casa",
        price: "2400000",
        images: [
          "1.jpg",
          "2.jpg",
          "3.jpg",
          "4.jpg",
          "5.jpg",
          "6.jpg",
          "7.jpg",
          "8.jpg",
          "9.jpg",
          "10.jpg"
        ],
        description: "Minimalistic Modern Master Piece",
        contact: "071212173",
        owner: "Ower",
        category: "Mansions ",
        propertyLocation: PropertyLocation(
            cordinates: Cordinates(lat: 0.6, long: 37.5), name: 'Adams'))
  ];
  @override
  Widget build(BuildContext context) {
    return SliverList(
      delegate: SliverChildBuilderDelegate((BuildContext context, int i) {
        return Container(
            width: 350,
            height: 450,
            color: Colors.white,
            child: ListView.builder(
                itemCount: _recentProperty.length,
                scrollDirection: Axis.horizontal,
                itemBuilder: (BuildContext context, int index) {
                  return Padding(
                    padding: const EdgeInsets.all(15.0),
                    child: Container(
                      width: 350,
                      height: 450,
                      decoration: BoxDecoration(
                        color: Colors.white,
                        boxShadow: [
                          BoxShadow(
                            color: Colors.grey.withOpacity(0.5),
                            spreadRadius: 5,
                            blurRadius: 7,
                            offset: Offset(0, 3), // changes position of shadow
                          ),
                        ],
                        borderRadius: BorderRadius.circular(40),
                      ),
                      child: Column(
                        children: [
                          CarouselSlider(
                              options: CarouselOptions(
                                  autoPlay: false, height: 300.0),
                              items: _recentProperty[index].images.map((i) {
                                return Builder(
                                  builder: (BuildContext context) {
                                    return ClipRRect(
                                      borderRadius: BorderRadius.circular(20),
                                      child: Image(
                                          image: AssetImage(
                                            "images/" +
                                                (index + 1).toString() +
                                                "/" +
                                                i,
                                          ),
                                          fit: BoxFit.cover),
                                    );
                                  },
                                );
                              }).toList()),
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                            children: [
                              Icon(Icons.home, color: Colors.orange),
                              Text(_recentProperty[index].name),
                              Row(
                                mainAxisAlignment: MainAxisAlignment.start,
                                children: [
                                  Icon(Icons.pin_drop, color: Colors.orange),
                                  Text(_recentProperty[index]
                                      .propertyLocation
                                      .name),
                                  IconButton(
                                      onPressed: () {},
                                      icon: Icon(Icons.map_outlined,
                                          color: Colors.orange))
                                ],
                              ),
                              Row(
                                mainAxisAlignment: MainAxisAlignment.start,
                                children: [
                                  Icon(Icons.money),
                                  Text("Ksh" +
                                      ((int.parse(_recentProperty[index]
                                                  .price)) /
                                              1000000)
                                          .toString() +
                                      "M"),
                                  IconButton(
                                      onPressed: () {},
                                      icon: Icon(Icons.map_outlined,
                                          color: Colors.orange))
                                ],
                              )
                            ],
                          ),
                          Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              ElevatedButton(
                                  onPressed: () {},
                                  style: ElevatedButton.styleFrom(
                                      fixedSize: Size(300, 10)),
                                  child: Text("SEE DETAILS"))
                            ],
                          )
                        ],
                      ),
                    ),
                  );
                }));
      }, childCount: 1),
    );
  }
}

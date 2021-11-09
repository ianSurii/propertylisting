import 'dart:math';

import 'package:carousel_slider/carousel_slider.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:propertylisting/models/property.dart';
import 'package:propertylisting/responsive/responsive.dart';
import 'package:propertylisting/screens/error.dart';
import 'package:propertylisting/screens/menu.dart';
import 'package:propertylisting/sliverlist.dart';

class Home extends StatefulWidget {
  Home({Key? key}) : super(key: key);

  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  var activeTab = 0;

  List _listTab = ["Home", "Schedule", "About Us", "Contacts"];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: NestedScrollView(
        headerSliverBuilder: (BuildContext context, bool innerBoxIsScrolled) {
          return <Widget>[
            SliverOverlapAbsorber(
              handle: NestedScrollView.sliverOverlapAbsorberHandleFor(context),
              sliver: SliverAppBar(
                pinned: true,
                //floating: true,
                title: Responsive.isDesktop(context)
                    ? Menu(isDesktop: true)
                    : SizedBox(),
                stretch: true,
                centerTitle: true,
                leading: Icon(Icons.house_outlined),
                backgroundColor: Colors.white,
                expandedHeight: 300.0,
                actions: [
                  Responsive.isDesktop(context)
                      ? SizedBox()
                      : IconButton(
                          onPressed: () {
                            showDialog(
                              context: context,
                              builder: (BuildContext context) {
                                return Center(
                                  child: Menu(
                                    isDesktop: false,
                                  ),
                                );
                              },
                            );
                          },
                          icon: Icon(Icons.menu))
                ],
                flexibleSpace: FlexibleSpaceBar(
                  centerTitle: true,
                  background: ClipRRect(
                    borderRadius: BorderRadius.only(
                      bottomRight: Radius.circular(20),
                      bottomLeft: Radius.circular(20),
                    ),
                    child: Image.asset(
                      'images/2/3.jpg',
                      fit: BoxFit.cover,
                    ),
                  ),
                ),
              ),
            ),
          ];
        },
        body: SafeArea(
          child: Builder(builder: (BuildContext context) {
            return CustomScrollView(
              slivers: <Widget>[
                SliverOverlapInjector(
                  // This is the flip side of the SliverOverlapAbsorber above.
                  handle:
                      NestedScrollView.sliverOverlapAbsorberHandleFor(context),
                ),
                SliverPadding(
                  padding: EdgeInsets.all(5),
                  sliver: SliverToBoxAdapter(
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.start,
                      children: [Text("RECENT")],
                    ),
                  ),
                ),
                CustomList(),
                SliverPadding(
                  padding: EdgeInsets.all(5),
                  sliver: SliverToBoxAdapter(
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.start,
                      children: [Text("NEAR YOU")],
                    ),
                  ),
                ),
                CustomList2(),
                SliverPadding(
                  padding: EdgeInsets.all(5),
                  sliver: SliverToBoxAdapter(
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.start,
                      children: [Text("MOST  VIEWED")],
                    ),
                  ),
                ),
                CustomList(),
                SliverPadding(
                  padding: EdgeInsets.all(5),
                  sliver: SliverToBoxAdapter(
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: [
                        Text("PropertyListing"),
                        Text("by Ian Surii"),
                        Row(
                          children: [
                            Icon(Icons.copyright_outlined),
                            Text("copyright @ 2021"),
                          ],
                        )
                      ],
                    ),
                  ),
                ),
              ],
            );
          }),
        ),
      ),
    );
  }
}

class Recent extends StatefulWidget {
  Recent({Key? key}) : super(key: key);

  @override
  _RecentState createState() => _RecentState();
}

class _RecentState extends State<Recent> {
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(5.0),
      child: Container(
        child: ListView.builder(
            itemCount: 2,
            scrollDirection: Axis.horizontal,
            itemBuilder: (BuildContext context, int index) {
              return Container(
                width: 200,
                height: 200,
                color: Colors.red,
              );
            }),
      ),
    );
  }
}
